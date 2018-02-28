import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, public iziToast: Ng2IzitoastService) {}
  ngOnInit() {}
  login() {
    this.authService.login(this.model).subscribe(
      data => {this.iziToast.success({position: 'topRight', title: 'OK', message: 'Bienvenido... '}); },
      error => {this.iziToast.error({position: 'topRight', title: 'Error', message: 'Credenciales inválidas', transitionIn: 'fadeInLeft', transitionOut: 'fadeOut', animateInside: false}, ); }
    );
  }
  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.iziToast.info({position: 'topRight', title: 'OK', message: 'Gracias por tu visita... '});
    console.log('Logged out!');
  }
  loggedIn() {return this.authService.loggedIn(); }
}
