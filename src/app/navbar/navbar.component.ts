import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  register()
  {
    this.router.navigate(['register']);
  }

  login()
  {
    this.router.navigate(['login']);
  }
  dashboard()
  {
    this.router.navigate(['dashboard']);
  }
  
}
