import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private activatedroute:ActivatedRoute) { }
  tabset:boolean=false;
  ngOnInit() {
  }
  collegeloginpage()
  {
    this.router.navigate(['col_login'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
  recruiterloginpage()
  {
    this.router.navigate(['rec_login'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
}