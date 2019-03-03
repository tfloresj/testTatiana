import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
/*import { UserService } from '../services/user.service';*/

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class ProductsComponent implements OnInit {
    users: User[];

    /*constructor(private userService:UserService) {}*/

    ngOnInit() {
        this.users = [];

    }


}