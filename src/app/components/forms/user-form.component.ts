import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';

@Component({
    selector: 'app-usert-form',
    templateUrl: './user-form.component.html' 
})
export class UserFormComponent implements OnInit {    
    @Input() user:User;

    @Output() handleSubmit:EventEmitter<User> = new EventEmitter<User>();
    constructor() {}

    ngOnInit(){
        console.log(this.user);
    }

    onSubmit(f:any){
        if(f.valid){
            this.handleSubmit.emit(this.user);
        }
    }
}