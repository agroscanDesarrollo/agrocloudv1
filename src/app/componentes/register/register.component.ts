import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';


@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    providers:[UserService]
})

export class RegisterComponent implements OnInit{
    public title:string;
    public user: User;
    public status:string;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _userService:UserService
    ){
        this.title='Registro';
        this.user=new User('','','','','','ROLE_USER','ACTIVE','','','','','');
    }

    ngOnInit(){
        console.log('register.component cargado');
        //console.log(this._userService.register());
    }

    onSubmit(){
        //console.log(this.user);
        this._userService.register(this.user).subscribe(
            response => {
                console.log(response);
                if(response.user._id){
                    
                    this.status='success';
                }else{
                    
                    this.status='error';
                }
                this.user=new User('','','','','','ROLE_USER','ACTIVE','','','','','');
            },
            error => {
                this.status='error';
                console.log(<any>error);
            }
        );
    }
}
