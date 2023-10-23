export interface PageResponse<Type> {
  data: Type[]
  meta: {
    page: number
    take: number
    itemCount: number
    pageCount: number
  }
}
