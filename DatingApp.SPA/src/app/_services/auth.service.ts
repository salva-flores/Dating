import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  userToken: any;
  baseUrl = 'http://localhost:59211/api/auth/';

  constructor(private http: Http) {}
  login(model: any) {
    return this.http
      .post(this.baseUrl + 'login', model, this.requestOptions())
      .map((response: Response) => {
        const user = response.json();
        console.log(user);
        if (user) {
          localStorage.setItem('token', user.tokenString);
          this.userToken = user.tokenString;
        }
      });
  }
  register(model: any) {
    return this.http.post(
      this.baseUrl + 'register',
      model,
      this.requestOptions()
    );
  }
  private requestOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }
}
