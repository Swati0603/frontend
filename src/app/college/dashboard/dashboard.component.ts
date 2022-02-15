import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  constructor(private router:Router,private activeroute:ActivatedRoute,private authService: AuthService) { }
  username:any;
  ngOnInit() {
    this.username=localStorage.getItem('currentemployee');
  }
  logoutemployee()
  {
    //this.authService.logout();
    //this.router.navigate(['login/emp_login'],)
  }
  jobs()
  {
    this.router.navigate(['jobs'],{relativeTo:this.activeroute});
  }
  appliedjobs()
  {
    this.router.navigate(['appliedjobs'],{relativeTo:this.activeroute});
  }
  gotoprofilepage()
  {
    this.router.navigate(['seeker/eprofile']);
  }

}
