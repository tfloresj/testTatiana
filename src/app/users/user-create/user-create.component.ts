import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import { User } from '../../users/user.model';


@Component({
    selector:'app-user-create',
    templateUrl:'./user-create.component.html'
})

export class UserCreateComponent{
    constructor(
        private router:Router,
        private userService: UserService){}

handlecrear(user:User){
    console.log(user);
    this.userService.createUser(user).subscribe(response => {
        this.router.navigate(['/users'])
    });

}
}