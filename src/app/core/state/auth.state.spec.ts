import { TestBed } from '@angular/core/testing'
import { of, throwError } from 'rxjs'
import { Router, RouterModule } from '@angular/router'

import { AuthState } from './auth.state'

import { UserRepository } from '@core/repositories'

describe('AuthState', () => {
  let authState: AuthState
  let userRepositoryMock: Partial<UserRepository>
  let routerMock: Partial<Router>

  beforeEach(() => {
    userRepositoryMock = {
      whoAmI: vi.fn().mockReturnValue(of({ username: 'test' })),
    }

    routerMock = {
      navigate: vi.fn(),
    }

    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        AuthState,
        { provide: UserRepository, useValue: userRepositoryMock },
        { provide: Router, useValue: routerMock },
      ],
    })

    authState = TestBed.inject(AuthState)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should set username and navigate to home on successful login', () => {
    // Arrange
    const username = 'testuser'

    // Act
    authState.login({ username })

    // Assert
    expect(authState.username()).toBe(username)
    expect(routerMock.navigate).toHaveBeenCalledWith(['/'])
  })

  it('should set username to null and navigate to login on logout', () => {
    // Arrange
    const username = 'testuser'
    authState.username.set(username)

    // Act
    authState.logout()

    expect(authState.username()).toBeNull()
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login'])
  })

  it('should set username to null and handle error on whoAmI failure', () => {
    // Arrange
    userRepositoryMock.whoAmI = vi.fn().mockReturnValue(throwError(() => new Error('Failed to fetch user')))

    // Act
    authState.whoAmI()

    // Assert
    expect(userRepositoryMock.whoAmI).toHaveBeenCalled()
    expect(authState.username()).toBeNull()
  })

  it('should set username and handle response on whoAmI success', () => {
    // Arrange
    const username = 'testuser'
    userRepositoryMock.whoAmI = vi.fn().mockReturnValue(of({ username }))

    // Act
    authState.whoAmI()

    // Assert
    expect(userRepositoryMock.whoAmI).toHaveBeenCalled()
    expect(authState.username()).toBe(username)
  })
})
