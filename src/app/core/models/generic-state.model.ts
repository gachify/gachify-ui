import { createSelector } from '@ngxs/store'

export enum GenericStoreStatus {
  Pending = 'pending',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export interface GenericStateModel<T> {
  data: T | null
  status: GenericStoreStatus
  error: string | null
}

export class GenericState {
  static data<T>() {
    return createSelector([this], (state: { data: T }) => state.data)
  }

  static isLoading() {
    return createSelector(
      [this],
      (state: { status: GenericStoreStatus }) => state.status === GenericStoreStatus.Loading,
    )
  }

  static isError() {
    return createSelector([this], (state: { status: GenericStoreStatus }) => state.status === GenericStoreStatus.Error)
  }
}
