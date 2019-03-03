import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {  } from '../users/user.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductService{
    baseUrl:string;
    constructor(private http:HttpClient){
        /*this.baseUrl=environment.api;*/
    }

    getUsers(){
        const fullUrl =`${this.baseUrl}/users/`;
        console.log(fullUrl);
        return this.http.get(fullUrl);

    }
    

}