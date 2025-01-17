import { Routes } from '@angular/router';
import {ContactsViewComponent} from './components/contacts-view/contacts-view.component';
import {ContactsAddComponent} from './components/contacts-add/contacts-add.component';
import {ContactsEditComponent} from './components/contacts-edit/contacts-edit.component';

export const routes: Routes = [
  {path:"new", component:ContactsAddComponent},
  {path:"info", component:ContactsViewComponent},
  {path:"contact/:id", component:ContactsEditComponent}
];
