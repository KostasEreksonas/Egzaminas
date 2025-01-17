import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../models/contact';
import {map, tap} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  private contacts:Contact[] = [];
  public idToken:string = "";

  constructor(private http:HttpClient, private auth:AuthService) {
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public addContact(item:Contact) {
    return this.http.post("https://contact-info-f3d88-default-rtdb.europe-west1.firebasedatabase.app/contacts.json", item, {
      params:{
        "auth":this.idToken
      }
    })
  }

  public loadContact(id:string) {
    return this.http.get<Contact>("https://contact-info-f3d88-default-rtdb.europe-west1.firebasedatabase.app/contacts/"+id+".json", {
      params:{
        "auth":this.idToken
      }
    })
  }

  public updateContact(item:Contact){
    return this.http.patch("https://contact-info-f3d88-default-rtdb.europe-west1.firebasedatabase.app/contacts/"+item.id+".json", item, {
      params:{
        "auth":this.idToken
      }
    })
  }

  public deleteContact(id:string){
    return this.http.delete("https://contact-info-f3d88-default-rtdb.europe-west1.firebasedatabase.app/contacts/"+id+".json", {
      params:{
        "auth":this.idToken
      }
    })
  }

  public loadContacts(){
    return this.http.get<{[key:string]:Contact}>("https://contact-info-f3d88-default-rtdb.europe-west1.firebasedatabase.app/contacts.json", {
      params:{
        "auth":this.idToken
      }
    }).pipe(
      map((data):Contact[]=>{
        const contacts = [];

        for (let i in data){
          data[i].id = i;
          contacts.push(data[i]);
        }

        return contacts;
      }),
      tap((data)=>{
        this.contacts = data;
      })
    )
  }
}
