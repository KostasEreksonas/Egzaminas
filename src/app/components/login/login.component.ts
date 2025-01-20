import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email:string|null = null;
  public password:string|null = null;
  public code:number|null = null;
  public message:string = "";
  public isError:boolean = false;

  public constructor(private auth:AuthService, private router:Router) {

  }

  public login(f:NgForm){
    this.auth.login(f.form.value.email, f.form.value.password).subscribe((data)=>{
      this.router.navigate(['info']).then(()=>{
        window.location.reload();
      });
    }, (data)=>{
      this.isError = true;
      this.code = data.error.error.code;
      this.message = data.error.error.message;
    });
  }
}
