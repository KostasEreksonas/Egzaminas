import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
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
  public code:number|null = null;
  public message:string = "";
  public isError:boolean = false;

  public constructor(private auth:AuthService, private router:Router) {
  }

  public register(f:NgForm) {
    this.auth.register(f.form.value.email, f.form.value.password).subscribe({
      next:()=>{
        this.router.navigate(['login']);
      },
      error:(data)=>{
        this.isError = true;
        this.code = data.error.error.code;
        this.message = data.error.error.message;
      }
    });
  }
}
