import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import { User } from '../../users/user.model';

@Component({
    selector:'app-user-edit',
    templateUrl:'./user-edit.component.html'
})

export class UserEditComponent implements OnInit {
    user: User;     
    constructor(private route: ActivatedRoute,
        private router:Router,
        private userService: UserService){}

    ngOnInit(){
         const id= this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.userService.getUserById(id).subscribe((user: User)=>{
            this.user=user});
    }

    handleSubmit(user:User){
        console.log(user);
        this.userService.updateUser(user.id,user).subscribe(response => {
            this.router.navigate(['/users'])
        });

    }

}
 