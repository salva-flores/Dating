import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor(private authService: AuthService, private userService: UserService, private izi: Ng2IzitoastService) { }
  ngOnInit() { }
  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {this.izi.success({position: 'topRight', title: 'OK', message: 'Le diste un Like a ... ' + this.user.knownAs}); },
     error => {this.izi.error({position: 'topRight', title: 'Error', message: error}); });
  }
}
