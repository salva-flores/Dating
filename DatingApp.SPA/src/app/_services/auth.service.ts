import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../_models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../_models/authUser';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl;
  // baseUrl = 'http://localhost:59211/api/auth/';
  userToken: any; decodedToken: any; currentUser: User;
  private photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {}

  changeMemberPhoto(photoUrl: string) {this.photoUrl.next(photoUrl); }

  login(model: any) {
    return this.http.post<AuthUser>(this.baseUrl + 'auth/login', model, {headers: new HttpHeaders().set('Content-Type', 'application/json')}).map(user => {
      if (user) {
        localStorage.setItem('token', user.tokenString);
        localStorage.setItem('user', JSON.stringify(user.user));
        this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
        this.currentUser = user.user;
        this.userToken = user.tokenString;
        if (this.currentUser.photoUrl == null) {this.changeMemberPhoto('../../assets/user.png'); } else {this.changeMemberPhoto(this.currentUser.photoUrl); }
      }      // console.log(this.decodedToken);
    });
  }

  register(user: User) {return this.http.post(this.baseUrl + 'auth/register', user, {headers: new HttpHeaders().set('Content-Type', 'application/json')}) ; }

  loggedIn() {
    // return tokenNotExpired('token'); replaced with following snippet to use new jwt
    const token = this.jwtHelperService.tokenGetter();
    if (!token) {return false; }
    return !this.jwtHelperService.isTokenExpired(token);
  }

  // private handleError(error: any) {
  //   const applicationError = error.headers.get('Application-Error');
  //   if (applicationError) {return Observable.throw (applicationError); }
  //   const serverError = error.json();
  //   let modelStateErrors = '';
  //   if (serverError) {for (const key in serverError) {if (serverError[key]) {modelStateErrors += serverError[key] + '\n'; }}}
  //   return Observable.throw(modelStateErrors || 'Server error');
  //  }

}
