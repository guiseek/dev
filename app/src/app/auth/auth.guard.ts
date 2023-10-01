import {CanActivateFn, Router} from '@angular/router'
import {AuthFacade} from '@dev/account-data-access'
import {catchError, map, take} from 'rxjs'
import {inject} from '@angular/core'

export const authGuard: CanActivateFn = () => {
  const router = inject(Router)
  const authFacade = inject(AuthFacade)

  return authFacade.me().pipe(
    catchError((err, user) => {
      if (err) {
        router.navigate(['/', 'auth'])
        throw err
      }
      return user
    }),
    map((user) => !!user),
    take(1)
  )
}
