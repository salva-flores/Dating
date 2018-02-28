import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService, public iziToast: Ng2IzitoastService) {}
  ngOnInit() {}
  register() {
    this.authService.register(this.model)
    .subscribe(() => {console.log(this.model + ' Registered succesfully');
    this.iziToast.success({title: 'OK', message: 'Te has registrado satisfactoriamente.'}); },
    error => {console.log('Error=>', error); });
  }
  cancel() {this.cancelRegister.emit(false); console.log(' cancelled'); }
}
