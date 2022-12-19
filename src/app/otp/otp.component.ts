import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  otp: any;
  constructor(private router: Router, private service: ServiceService) {
    // this.servuce = this.service.init();
  }
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };
  onOtpChange(otp: any) {
    this.otp = otp;
    if (otp == localStorage.getItem('otp')) {
      this.router.navigate(['/thanks']);
    } else {
      this.router.navigate(['/opps']);
    }
  }

  ngOnInit(): void {}
  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

  // toggleDisable() {
  //   if (this.ngOtpInput.otpForm) {
  //     if (this.ngOtpInput.otpForm.disabled) {
  //       this.ngOtpInput.otpForm.enable();
  //     } else {
  //       this.ngOtpInput.otpForm.disable();
  //     }
  //   }
  // }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
}
