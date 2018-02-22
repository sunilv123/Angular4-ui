import { Component, NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

export const routes : Routes= [
{path:'',component: LoginComponent} ,
{path:'dashboard',component: DashboardComponent} ,
{path:'register',component: RegisterComponent} ,
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
     exports : [RouterModule]
})

export class CustomRoutingModule{
    
}