import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;
  name: any;
  email: any;
  store: any;
  store1: any;
  servuce: any;
  constructor(private router: Router, private service: ServiceService) {
    // this.servuce = this.service.init();
  }

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    let number = JSON.stringify(new Number(form.value.email));
    console.log(JSON.stringify(new Number(form.value.email))),
      console.log(form.value);
    let data = {
      firstName: form.value.fname,
      lastName: form.value.lname,
      Email: form.value.email,
    };
    console.log(data);
    this.service.logIn(data).subscribe((res: any) => {
      console.log(res.otp, res, 'data');
      let otp = res.otp;
      localStorage.setItem('otp', otp);
      this.router.navigate(['/otp']);
    });
  }
}
