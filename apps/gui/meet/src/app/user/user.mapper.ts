import { User } from './user.model'
import firebase from 'firebase/app'

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
  'metallurgical.svg',
  'nurse.svg',
  'nursing-assistant.svg',
  'police-officer.svg',
  'soldier.svg',
  'telemarketing.svg',
]

export class UserMapper {
  static from(firebaseUser: any): User {
    const { photoURL, ...user } = firebaseUser
    return {
      ...user,
      photoURL: photoURL ? photoURL : this.getRandomPhoto(),
    }
  }
  static getRandomPhoto() {
    const random = Math.floor(Math.random() * avatars.length - 1)
    return `assets/avatar/${avatars[random]}`
  }
}
