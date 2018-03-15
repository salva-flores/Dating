import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Unread';

  constructor(public authService: AuthService, public userService: UserService, public izi: Ng2IzitoastService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {this.messages = data['messages'].result; this.pagination = data['messages'].pagination; });
  }
  loadMessages() {
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
    .subscribe((res: PaginatedResult<Message[]>) => {this.messages = res.result; this.pagination = res.pagination; }, error => {this.izi.error({position: 'topRight', title: 'Error', message: error}); });
  }
  deleteMessage(id: number) {
    this.userService.deleteMessage(id, this.authService.decodedToken.nameid)
    .subscribe(() => {this.messages.splice(_.findIndex(this.messages, {id: id}), 1); this.izi.success({position: 'topRight', title: 'Ok', message: 'Mensaje borrado.'}); },
    error => {this.izi.error({position: 'topRight', title: 'Error', message: 'No se pudo borrar el mensaje.'}); });
  }
  pageChanged(event: any): void {this.pagination.currentPage = event.page; this.loadMessages(); }
}
