import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];

    constructor(private userService:UserService) {}

    ngOnInit() {
        this.users = [];
        this.userService.getUsers().subscribe((data:User[]) =>{
            this.users=data;})
    }

    deleteUser(user: User) {
        const {id} =user;
        this.userService.deleteUser(id)
         .subscribe(response=>
             console.log);
         this.ngOnInit();    
             
     }
 

}