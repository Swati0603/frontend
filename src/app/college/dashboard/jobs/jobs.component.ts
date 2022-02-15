import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs:any=[];
waitforjobs:any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
totaljobs:any;

headers=['Role',
'Description',
'Type',
'Domain',
'Compensation',
'Open For',
'Location',
'Company',
]



public routeSub: Subscription;
  constructor(private router:Router,private authService:AuthService,private route: ActivatedRoute) { }
  ngOnInit() {
  this.authService.getjobs();
  }

  getjobs()
  {
    this.authService.getjobs().subscribe(
      (response:any)=>
    {
      if(response && response.length>0)
      {
        this.jobs=response;
        this.totaljobs=response.length;
      } 
    },
    (error)=>{
      console.log(error.msg);
    }
    );
  }
  apply(jobapply:any)
  {
    console.log(jobapply);
    this.authService.applyjob(jobapply).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
         },2000) ;
        }else{
          this.alreadyapplied=response.message; 
          setTimeout(()=>{
            this.alreadyapplied='';
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
        this.errormessage=err.message;
      }
    );
    
  }
}