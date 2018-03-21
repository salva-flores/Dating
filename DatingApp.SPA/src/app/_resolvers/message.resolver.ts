import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Message } from '../_models/message';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MessageResolver implements Resolve<Message[]> {
    pageSize = 5;
    pageNumber = 1;
    messageContainer = 'Unread';
    constructor(private userService: UserService, private router: Router, private izi: Ng2IzitoastService, private authService: AuthService ) {}
    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).catch(error => {
            // this.izi.error({position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...'});
            this.izi.error({position: 'topRight', title: 'Error!', message: error});
            this.router.navigate(['/members']);
            return Observable.of(null);
        });
    }
}
