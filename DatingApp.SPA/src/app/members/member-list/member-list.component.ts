import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/User.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, public izi: Ng2IzitoastService, private route: ActivatedRoute) { }
  ngOnInit() {this.route.data.subscribe(data => {this.users = data['users']; }); }
  // loadUsers() {this.userService.getUsers().subscribe((users: User[]) => {this.users = users; }, error => {this.izi.error({position: 'topRight', title: 'Error', message: error}); }); }
}
