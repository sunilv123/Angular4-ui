import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(

 private http : Http,
 private router : Router

  ) { }

  ngOnInit() {
      }

onSubmit(registerForm){
  console.log(registerForm);
  
  

     this.http.post("http://localhost:9898/register",registerForm)
     .subscribe(response=>{

     if(response.json().isSuccess){
      this.router.navigate(['dashboard']);
     }

     },error=>{
       console.log(error);
       
     })

  

}


}
