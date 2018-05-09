import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[UserService]
})

export class LoginComponent implements OnInit{
    private title:string;
    public user: User;
    public identity;
    public token;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _userService:UserService
    ){
        this.title='Login';
        this.user=new User('','','','','','ROLE_USER','ACTIVE','','','','','');
    }

    ngOnInit(){
        console.log('login.component cargado')
    }
    onSubmit(){
        this._userService.signup(this.user).subscribe(
            response=>{
                this.identity=response.user; 
                if(!this.identity || !this.identity._id){
                    alert('El susuario no se ha logueado correctamente');
                }else{
                    this.identity.password='';
                    //conseguir el token del usuario
                    this._userService.signup(this.user,'true').subscribe(
                        response=>{
                            this.token=response.token; 
                            if(this.token.lenght <= 0){
                                alert('El token no se ha generado');
                            }else{
                                console.log(this.identity);
                                console.log(this.token);
                            }
                        },
                        error=>{
                            console.log(<any>error);
                        }
                    );

                }
            },
            error=>{
                console.log(<any>error);
            }
        );
    }

}