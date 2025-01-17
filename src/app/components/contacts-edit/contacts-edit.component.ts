import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactInfoService} from '../../services/contact-info.service';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contacts-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts-edit.component.html',
  styleUrl: './contacts-edit.component.css'
})
export class ContactsEditComponent {
  public id:string;
  public firstName:string|null = "";
  public surname:string|null = "";
  public phone:string|null = "";
  public email:string|null = "";
  public comment:string|null = "";
  public companyName:string|null = "";
  public companyAddress:string|null = "";

  public constructor(private route:ActivatedRoute, private router:Router, private contactService:ContactInfoService) {
    this.id = this.route.snapshot.params["id"];
    this.contactService.loadContact(this.id).subscribe((contact)=>{
      this.firstName = contact.firstName;
      this.surname = contact.surname;
      this.phone = contact.phone;
      this.email = contact.email;
      this.comment = contact.comment;
      this.companyName = contact.companyName;
      this.companyAddress = contact.companyAddress;
    })
  }

  public updateContact(f:NgForm) {
    this.contactService.updateContact({
      id:this.id,
      firstName:f.form.value.firstName,
      surname:f.form.value.surname,
      phone:f.form.value.phone,
      email:f.form.value.email,
      comment:f.form.value.comment,
      companyName:f.form.value.companyName,
      companyAddress:f.form.value.companyAddress
    }).subscribe({
      next:()=>{
        this.router.navigate(['info']);
      }
    })
  }
}
