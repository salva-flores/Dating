import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { User } from '../_models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, public iziToast: Ng2IzitoastService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.bsConfig = {containerClass: 'theme-red'};
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true}; }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value); console.log(this.user);
      this.authService.register(this.user).subscribe(() => {
        this.iziToast.success({title: 'OK', message: 'Te has registrado satisfactoriamente.'});
      }, error => {
        this.iziToast.error({title: 'ERROR!', message: 'No se pudo registrar el usuario.'});
      }, () => {
        this.authService.login(this.user).subscribe(() => {this.router.navigate(['/members']);
      });
      });
    }
    // this.authService.register(this.model)
    // .subscribe(() => {console.log(this.model + ' Registered succesfully');
    // error => {console.log('Error=>', error); });
    // console.log(this.registerForm.value);
  }
  cancel() {this.cancelRegister.emit(false); console.log(' cancelled'); }
}
