import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { SnackService } from '../services/snack.service'
import { Observable } from 'rxjs'
import { map, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afa: AngularFireAuth, private snack: SnackService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.afa.user.pipe(
      take(1),
      map((usr) => !!usr),
      tap(auth => {
        if (!auth) {
          this.snack.authError()
        }
      })
    )
    /*
    const user = await this.afAuth.currentUser
    const isLoggedIn = !!user
    if (!isLoggedIn) {
      this.snack.authError()
    }
    return isLoggedIn
    */
  }
}
