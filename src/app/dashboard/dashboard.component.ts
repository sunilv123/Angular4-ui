import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result:any
  user: any;
  userList:any =[];

  constructor(
    private http : Http,
    private router : Router

  ) { }

  ngOnInit() {
   this.getList();

  }
  getList() {
    this.http.get('http://localhost:9898/get-appuser-list')
   .subscribe(response=>{
     if(response.json().isSuccess){

      this.userList = response.json().payLoad;
     }
   },error=>{

   })
  }
  edit(x){
    
    alert(x)
  }
  delete(index, id){
    //this.userList.splice(0,1,x);
    this.http.get('http://localhost:9898/delete-user/'+id)
    .subscribe(response=>{
      if(response.json().isSuccess){
     this.result=response.json();
     this.user = this.result.payLoad;
     this.userList.splice(index,1);
     
      
      }
    },error=>{
 
    })


  }

}
