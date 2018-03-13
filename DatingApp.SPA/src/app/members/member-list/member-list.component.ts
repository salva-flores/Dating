import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from '../../_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  page: any;
  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  genderList = [
    { value: 'male', display: 'Hombres' },
    { value: 'female', display: 'Mujeres' }
  ];
  userParams: any = {};
  pagination: Pagination;
  constructor(
    private userService: UserService,
    public izi: Ng2IzitoastService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
  }
  loadUsers() {
    this.userService
      .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
      .subscribe(
        (res: PaginatedResult<User[]>) => {
          this.users = res.result;
          this.pagination = res.pagination;
        },
        error => {
          this.izi.error({
            position: 'topRight',
            title: 'Error',
            message: error
          });
        }
      );
  }
  resetFilters() {
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.pagination.currentPage = event.page;
    this.loadUsers();
    console.log('Page changed to: ' + event.page, event.itemsPerPage);
  }
  // loadUsers() {this.userService.getUsers().subscribe((users: User[]) => {this.users = users; }, error => {this.izi.error({position: 'topRight', title: 'Error', message: error}); }); }
}
