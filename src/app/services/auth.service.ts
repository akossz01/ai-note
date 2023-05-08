import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, authState } from '@angular/fire/auth';
import { Firestore, doc } from '@angular/fire/firestore';
import { Observable, from, switchMap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | any;
  currentUser$ = authState(this.auth);
  
  private _loggedIn: boolean = false;
  constructor(private auth: Auth, private firestore: Firestore) {
    this.auth.onAuthStateChanged(user => {
      this.user = user;
    });
  }

  login(username: string, password: string) {
    this._loggedIn = true;
    localStorage.setItem('loggedIn', 'true');

    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    this._loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
    
    return from(this.auth.signOut());
  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName: name }))
    )
  }

  /* signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
 */
  loggedIn() {
    return this._loggedIn;
  }

  getCurrentUser(): User {
    return this.user;
  }

  setLoginTrue() {
    this._loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  resetPassword(email: string) {
    sendPasswordResetEmail(this.auth, email);
  }
}
