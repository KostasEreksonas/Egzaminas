import { Routes } from '@angular/router';
import {ContactsViewComponent} from './components/contacts-view/contacts-view.component';
import {ContactsAddComponent} from './components/contacts-add/contacts-add.component';
import {ContactsEditComponent} from './components/contacts-edit/contacts-edit.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path:"new", component:ContactsAddComponent},
  {path:"info", component:ContactsViewComponent},
  {path:"contact/:id", component:ContactsEditComponent},
  {path:"register", component:RegistrationComponent},
  {path:"login", component:LoginComponent}
];
