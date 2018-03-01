import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:59211/api/auth/';
  userToken: any; decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private http: Http) {}
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
      const user = response.json();
      if (user) {localStorage.setItem('token', user.tokenString); this.decodedToken = this.jwtHelper.decodeToken(user.tokenString); this.userToken = user.tokenString; }
      console.log(this.decodedToken);
    });
  }
  register(model: any) {return this.http.post(this.baseUrl + 'register', model, this.requestOptions()); }
  loggedIn() {return tokenNotExpired('token'); }
  private requestOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }
  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {return Observable.throw (applicationError);
    }
   }
}
