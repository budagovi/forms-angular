import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  private users:User[] = [
    {firstName: 'admin', lastName:'admin', email: 'admin', password: 'admin', jobID: 'admin'}
  ];

  login(username:string | undefined, pw:string | undefined) {   
    const user = this.users.find(u => u.email == username && u.password == pw);

    if(user && user.email) {
      localStorage.setItem('username', user.email)
      return true;
    }
    else {
      return false;
    }
  }

  register(user:User) {
    const userExists = this.users.find(u => u.email == user.email && u.password == user.password);

    if(userExists && userExists.email) {
      return false;
    }
    else {
      this.users.push(user);
      return true;
    }
  }

  getUser() {
    const username = localStorage.getItem('username');
    const user:User | undefined = this.users.find(u => u.email == username);

    return user;
  }
}
