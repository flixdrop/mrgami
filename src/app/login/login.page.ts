// import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { UtilService } from '../util.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   constructor(
//     private util: UtilService,
//     private navCtrl: NavController,
//   ) { }

//   ngOnInit() {
//   }

//   login() {
//     // Enabling Side Menu
//     this.util.setMenuState(true);
//     this.navCtrl.navigateRoot('landing', { animationDirection: 'forward' });
//   }

// }

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { LoginService } from "../services/login.service";
import { UtilService } from "../util.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  inputNumber;
  isNumberSubmitted: boolean;
  name;
  otpreceived = "889963";
  otp: any;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private login: LoginService,
    private util: UtilService
  ) {}
  onOtpChange(otp) {
    this.otp = otp;
    console.log(otp);
  }
  onLogin() {
    //this.isNumberSubmitted =true;
    this.login.validateOtp(this.name, this.inputNumber, this.otp).subscribe(
      (response) => {
        //this.isNumberSubmitted =true;
        console.log("onLogin with OTP", response);
        //this.router.navigate(['welcome']);
        this.navCtrl.navigateRoot("tabs/landing", { animationDirection: "forward" });
        this.util.setMenuState(true);
        console.log("Clicked");
      },
      (error) => {
        //this.isNumberSubmitted = false;
        console.log("Error in onLogin()", error);
      }
    );
  }

  onNumberSubmitted() {
    this.login.generateOtp(this.name, this.inputNumber).subscribe(
      (response) => {
        this.isNumberSubmitted = true;
        console.log("NumberSubmitted", response);
        localStorage.setItem("isLoggedIn", "true");
      },
      (error) => {
        this.isNumberSubmitted = false;
      }
    );
  }
}
