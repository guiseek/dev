import { Component, ViewEncapsulation } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth'

const getRandomAvatar = () => {
  const avatars = [
    'astronaut.svg',
    'bricklayer.svg',
    'chef.svg',
    'civil-engineer.svg',
    'cooke.svg',
    'diver.svg',
    'doctor.svg',
    'farmer.svg',
    'fireman.svg',
    'google-logo.svg',
    'metallurgical.svg',
    'nurse.svg',
    'nursing-assistant.svg',
    'police-officer.svg',
    'soldier.svg',
    'telemarketing.svg',
  ]
  return avatars[Math.floor(Math.random() * avatars.length - 1)]
}

@Component({
  selector: 'meet-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    )

  user = this.afAuth.user.pipe(
    map(({ photoURL, ...user }) => {
      return {
        ...user,
        photoURL: photoURL ? photoURL : `assets/${getRandomAvatar()}`,
      }
    })
  )
  constructor(
    private breakpointObserver: BreakpointObserver,
    private afAuth: AngularFireAuth
  ) {}
}
