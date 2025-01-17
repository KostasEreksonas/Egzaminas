import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {CommonModule, NgFor} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  public email:string|null = null;
  public password:string|null = null;

  public constructor(private auth:AuthService, private router:Router) {
  }

  public register(f:NgForm) {
    this.auth.register(f.form.value.email, f.form.value.password).subscribe((data)=>{
      this.router.navigate(['login']);
    })
  }
}
