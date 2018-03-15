import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../_models/message';
import { UserService } from '../../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from '../../_services/auth.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() userId: number;
  messages: Message[];
  newMessage: any = {};

  constructor( private userService: UserService, public izi: Ng2IzitoastService, private authService: AuthService) { }

  ngOnInit() {
    this.loadMessages();
  }
 loadMessages() {
   const currentUserId = +this.authService.decodedToken.nameid; // that plus sign helps to match with the message.recipientId in the condition below
   this.userService.getMessageThread(this.authService.decodedToken.nameid, this.userId)
   .do(messages => {
     _.each(messages, (message: Message) => {
       if (message.isRead === false && message.recipientId === currentUserId) {this.userService.markAsRead(currentUserId, message.id); }
     });
   })
   .subscribe(messages => {this.messages = messages; }, error => { this.izi.error({position: 'topRight', title: 'Error!', message: error }); });
  }
  sendMessage() {
    this.newMessage.recipientId = this.userId;
    this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
    .subscribe(message => {this.messages.unshift(message); this.newMessage.content = ''; } , error => { this.izi.error({position: 'topRight', title: 'Error!', message: error }); });
  }
}
