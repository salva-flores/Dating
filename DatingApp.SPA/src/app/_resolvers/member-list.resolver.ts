import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageSize = 5;
    pageNumber = 1;
    constructor(private userService: UserService, private router: Router, private izi: Ng2IzitoastService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(error => {
            console.log(error);
            this.izi.error({position: 'topRight', title: 'member-list.resolver', message: error});
            this.router.navigate(['/home']);
            return Observable.of(null);
        });
    }
}
