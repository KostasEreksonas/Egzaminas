import { Component } from '@angular/core';
import {ContactInfoService} from '../../services/contact-info.service';
import {Contact} from '../../models/contact';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contacts-view',
  imports: [CommonModule, RouterLink],
  templateUrl: './contacts-view.component.html',
  styleUrl: './contacts-view.component.css'
})
export class ContactsViewComponent {
  public contacts:Contact[] = [];
  public idToken:string = "";

  private loadData(){
    this.contactService.loadContacts().subscribe({
      next:(data)=>{
        this.contacts = data;
      }
    })
  }

  public constructor(private contactService:ContactInfoService) {
    this.loadData();
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public deleteContact(id:string|null){
    if (id != null){
      this.contactService.deleteContact(id).subscribe( ()=>{
        this.loadData();
      })
    }
  }
}
