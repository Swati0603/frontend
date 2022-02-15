import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute,private formBuilder:FormBuilder,) { }
  tabset:boolean=false;

  ngOnInit() {
  }
  employeeregisterpage()
  {
    this.router.navigate(['col_register'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
  recruiterregisterpage()
  {
    this.router.navigate(['rec_register'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
}