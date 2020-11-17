import { UserMapper } from './user.mapper'
import { User } from './user.model'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core'
import { filter, map } from 'rxjs/operators'
import { forkJoin, merge, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new Subject<User>()
  user$: Observable<User>

  signIn({ email, password }) {
    return this.afa.signInWithEmailAndPassword(email, password)
  }

  signOut(redirectTo = '/login') {
    this.afa.signOut().then(() => {
      if (redirectTo) {
        this.router.navigateByUrl(redirectTo)
      }
      this.user.next(null)
    })
  }

  constructor(private router: Router, private afa: AngularFireAuth) {
    const user$ = this.afa.user.pipe(
      filter((user) => !!user),
      map((user) => UserMapper.from(user.toJSON()))
      // map(user => this.user.next(user))
    )
    this.user$ = merge(user$, this.user)
  }
}
