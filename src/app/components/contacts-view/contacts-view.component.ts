import { Component } from '@angular/core';
import {ContactInfoService} from '../../services/contact-info.service';
import {Contact} from '../../models/contact';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-contacts-view',
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    LoadingComponent
  ],
  templateUrl: './contacts-view.component.html',
  styleUrl: './contacts-view.component.css'
})
export class ContactsViewComponent {
  public contacts:Contact[] = [];
  public idToken:string = "";
  public isLoading = false;
  public filterValue:string = "";
  public filter:string = "";

  private loadData(){
    this.isLoading = true;
    this.contactService.loadContacts().subscribe({
      next:(data)=>{
        this.contacts = data.sort((a,b) => a.surname > b.surname ? 1 : -1);
        this.isLoading = false;
      }
    })
  }

  public filterData() {
    this.isLoading = true;
    this.contactService.loadContacts().subscribe({
      next:(data)=>{
        if (this.filter === "firstName") {
          this.contacts = data.filter(x => x.firstName === this.filterValue);
          this.isLoading = false;
        } else if (this.filter === "surname") {
          this.contacts = data.filter(x => x.surname === this.filterValue);
          this.isLoading = false;
        } else if (this.filter === "companyName") {
          this.contacts = data.filter(x => x.companyName === this.filterValue);
          this.isLoading = false;
        } else if (this.filter === "") {
          this.contacts = data;
          this.isLoading = false;
        }
        this.filter = "";
        this.filterValue = "";
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
