import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  // templateUrl: 'login.component.html',
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`,
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      console.log(this.authService.isLoggedIn);
      
      if (this.authService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the planes page
        this.router.navigate(['/planes']);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
