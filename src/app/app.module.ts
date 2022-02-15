import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CollegeloginComponent } from './Auth/login/collegelogin/collegelogin.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { AuthService } from './_services/auth.service';
import { CollegeRegisterComponent } from './Auth/register/collegeregister/collegeregister.component';
import { RecruiterregisterComponent } from './Auth/register/recruiterregister/recruiterregister.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';
import { DashboardComponent } from './college/dashboard/dashboard.component';
import { JobsComponent } from './college/dashboard/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CollegeloginComponent,
    RecruiterloginComponent,
    CollegeRegisterComponent,
  RecruiterregisterComponent,
  PostjobComponent,
  DashboardComponent,
  JobsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
