import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../users/user.model';

@Injectable()
export class UserService{
    baseUrl:string;
    constructor(private http:HttpClient){
        this.baseUrl=environment.api;
    }

    getUsers(){
        const fullUrl =`${this.baseUrl}/users/`;
        console.log(fullUrl);
        return this.http.get(fullUrl);

    }
    
    getUserById(id:string){  
        const fullUrl =`${this.baseUrl}/users/${id}`;
        console.log(fullUrl);
        return this.http.get(fullUrl);    

             }

    createUser(user:User){
        const fullUrl =`${this.baseUrl}/users/`;
        console.log(fullUrl);
        return this.http.post(fullUrl,user);
    }


    updateUser(id:string, user:User){
        const fullUrl =`${this.baseUrl}/users/${id}`;
        console.log(fullUrl);
        return this.http.put(fullUrl,user);
    }

    deleteUser(id:string){
        const fullUrl =`${this.baseUrl}/users/${id}`;
        console.log(fullUrl);
        return this.http.delete(fullUrl);
    }


}