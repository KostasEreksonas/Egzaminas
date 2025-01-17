import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public idToken:string = "";

  public constructor(private auth:AuthService, private router:Router) {
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public deleteToken() {
    this.auth.deleteToken();
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    })
  }
}
