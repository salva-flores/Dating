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
export class ListsResolver implements Resolve<User[]> {
    pageSize = 5;
    pageNumber = 1;
    likesParam = 'Likers';
    constructor(private userService: UserService, private router: Router, private izi: Ng2IzitoastService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(error => {
            this.izi.error({position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...'});
            this.router.navigate(['/home']);
            return Observable.of(null);
        });
    }
}