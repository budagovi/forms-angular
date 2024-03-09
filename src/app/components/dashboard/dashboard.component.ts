import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router:Router, private authService: AuthService) {
  }

  username = localStorage.getItem('username');
  user = this.authService.getUser();

  ngOnInit() {
    if(!localStorage.getItem('username'))
      this.router.navigate(['']);
  }

  logout() {
    this.router.navigate(['']);
    localStorage.removeItem('username');
  }
}
