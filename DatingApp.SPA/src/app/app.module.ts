import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/User.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, MemberListComponent, ListsComponent, MessagesComponent, MemberCardComponent, MemberDetailComponent, MemberEditComponent],
  imports: [BrowserModule, HttpModule, FormsModule, Ng2IziToastModule, BsDropdownModule.forRoot(), RouterModule.forRoot(appRoutes), AuthModule, TabsModule.forRoot(), NgxGalleryModule],
  providers: [AuthService, AuthGuard, UserService, MemberDetailResolver, MemberListResolver, MemberEditResolver, PreventUnsavedChanges],
  bootstrap: [AppComponent]
})
export class AppModule {}
