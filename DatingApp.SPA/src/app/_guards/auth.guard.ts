import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private izi: Ng2IzitoastService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn()) {return true; }
    this.izi.error({position: 'topRight', title: 'Error', message: 'Not logged in!', transitionIn: 'fadeInLeft', transitionOut: 'fadeOut', animateInside: false}, );
    this.router.navigate(['/home']); return false;
  }
}
