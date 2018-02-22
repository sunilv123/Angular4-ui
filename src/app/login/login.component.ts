import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm : FormGroup
    
    constructor(
        private http:Http,
        private router : Router,
    ){}
    ngOnInit(){
        
     this.loginForm = new FormGroup({
       'userName' : new FormControl(null,Validators.required),
       'password' : new FormControl(null, Validators.required)

     })

    }
    login(){
        console.log(this.loginForm.value);
       if(this.loginForm.valid){
        this.http.post('http://localhost:9898/login',
        this.loginForm.value
      )
        .subscribe(response=>{ 
            console.log(response.json());
            
          if(response.json().isSuccess){
           this.router.navigate(['register']);
          }

        }
            ,error=>{console.log("url not valid");}
        )
       } 
    }
}