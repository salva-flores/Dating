import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  photoUrl: string;
  model: any = {};
  constructor(public authService: AuthService, public iziToast: Ng2IzitoastService, private router: Router) {}
  ngOnInit() {this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl); }
  login() {
    this.authService.login(this.model).subscribe(
      data => {this.iziToast.success({position: 'topRight', title: 'OK', message: 'Bienvenido... '}); },
      error => {this.iziToast.error({position: 'topRight', title: 'Error', message: 'Credenciales inválidas', transitionIn: 'fadeInLeft', transitionOut: 'fadeOut', animateInside: false}); },
      () => {this.router.navigate(['/members']); });
    }
  logout() {
    this.authService.userToken = null;
    this.authService.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.iziToast.info({position: 'topRight', title: 'OK', message: 'Gracias por tu visita... '});
    this.router.navigate(['/home']);
  }
  loggedIn() {return this.authService.loggedIn(); }
}
