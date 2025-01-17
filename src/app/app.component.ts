import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactsEditComponent} from './components/contacts-edit/contacts-edit.component';
import {ContactsAddComponent} from './components/contacts-add/contacts-add.component';
import {ContactsViewComponent} from './components/contacts-view/contacts-view.component';
import {NavigationComponent} from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContactsEditComponent,
    ContactsAddComponent,
    ContactsViewComponent,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Egzaminas';
}
