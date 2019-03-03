import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserFormComponent} from './components/forms/user-form.component';
import {UsersComponent} from './users/users.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserCreateComponent} from './users/user-create/user-create.component';
import { routes } from './app.routing';
import {UserService} from './services/user.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserFormComponent,
    UsersComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
