import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {LoginComponent} from './Auth/login/login.component';
import { CollegeloginComponent } from './Auth/login/collegelogin/collegelogin.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CollegeRegisterComponent } from './Auth/register/collegeregister/collegeregister.component';
import { RecruiterregisterComponent } from './Auth/register/recruiterregister/recruiterregister.component';
import { DashboardComponent } from './college/dashboard/dashboard.component';
import { JobsComponent } from './college/dashboard/jobs/jobs.component';
const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'jobs',component:JobsComponent},
    
    ]},
  
  {path:'',redirectTo:'login/rec_login',pathMatch:'full'},
  {path:'login',component:LoginComponent,children:[
    {path:'col_login',component:CollegeloginComponent},
    {path:'rec_login',component:RecruiterloginComponent}
  ]},
  {path:'register',component:RegisterComponent,children:[
    {path:'col_register',component:CollegeRegisterComponent},
    {path:'rec_register',component:RecruiterregisterComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,
  CollegeloginComponent,
  RecruiterloginComponent,
  RegisterComponent,
  CollegeRegisterComponent,RecruiterregisterComponent,
  DashboardComponent
];