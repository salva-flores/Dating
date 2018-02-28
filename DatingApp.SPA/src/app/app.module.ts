import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { Ng2IziToastModule } from 'ng2-izitoast';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, HttpModule, FormsModule, Ng2IziToastModule, BsDropdownModule.forRoot() ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
