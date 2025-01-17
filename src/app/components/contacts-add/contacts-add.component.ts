import { Component } from '@angular/core';
import {ContactInfoService} from '../../services/contact-info.service';
import {FormsModule, NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Contact} from '../../models/contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts-add.component.html',
  styleUrl: './contacts-add.component.css'
})
export class ContactsAddComponent {
  public idToken:string = "";
  public firstName:string|null = "";
  public surname:string|null = "";
  public phone:string|null = "";
  public email:string|null = "";
  public comment:string|null = "";
  public companyName:string|null = "";
  public companyAddress:string|null = "";

  public constructor(private contactService:ContactInfoService, private router:Router) {
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public newContact(f:NgForm) {
    const tmp:Contact={
      firstName:f.form.value.firstName,
      surname:f.form.value.surname,
      phone:f.form.value.phone,
      email:f.form.value.email,
      comment:f.form.value.comment,
      companyName:f.form.value.companyName,
      companyAddress:f.form.value.companyAddress,
      id:null
    };

    this.contactService.addContact(tmp).subscribe(()=>{
      this.router.navigate(['info']);
    });
  }
}
