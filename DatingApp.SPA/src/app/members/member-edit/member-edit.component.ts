import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/User';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/User.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;
  photoUrl: string;
  constructor(private route: ActivatedRoute, private izi: Ng2IzitoastService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {this.user = data['user']; });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.izi.success({position: 'topRight', title: 'OK', message: 'Perfil actualizado con éxito.'});
      this.editForm.reset(this.user);
    }, error => {this.izi.error({position: 'topRight', title: 'Error!', message: 'No pudo actualizar el perfil!.'}); });
    // console.log(this.user);
 }
 updateMainPhoto(photoUrl) { this.user.photoUrl = photoUrl; }
}
