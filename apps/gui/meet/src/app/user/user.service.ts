import { UserMapper } from './user.mapper';
import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core'
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user$ = this.afa.user.pipe(
    filter(user => !!user),
    map((user) => UserMapper.from(user.toJSON()))
  )

  constructor(private afa: AngularFireAuth) {}
}
