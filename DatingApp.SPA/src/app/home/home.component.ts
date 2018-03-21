import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  registerToggle() {this.registerMode = true; }
  resetRegisterMode(registerMode: boolean) {this.registerMode = registerMode; }
  // ping() {this.http.get('http://localhost:59211/api/users').subscribe(data => console.log(data), err => console.log(err)); }
  // ping() {this.http.get('http://localhost:59211/api/users?pageNumber=1&pageSize=5&Likers=true').subscribe(data => console.log(data), err => console.log(err)); }
  ping() {this.http.get('http://localhost:59211/api/users/19/messages?MessageContainer=Unread&pageNumber=1&pageSize=5').subscribe(data => console.log(data), err => console.log(err)); }

}
