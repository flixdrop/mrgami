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

//Twillio based login
// import { Component } from "@angular/core";
// import { Router } from "@angular/router";
// import { NavController } from "@ionic/angular";
// import { LoginService } from "../services/login.service";
// import { UtilService } from "../util.service";

// @Component({
//   selector: "app-login",
//   templateUrl: "./login.page.html",
//   styleUrls: ["./login.page.scss"],
// })
// export class LoginPage {
//   inputNumber;
//   isNumberSubmitted: boolean;
//   name;
//   otpreceived = "889963";
//   otp: any;
//   constructor(
//     private navCtrl: NavController,
//     private router: Router,
//     private login: LoginService,
//     private util: UtilService
//   ) {}
//   onOtpChange(otp) {
//     this.otp = otp;
//     console.log(otp);
//   }
//   onLogin() {
//     //this.isNumberSubmitted =true;
//     this.login.validateOtp(this.name, this.inputNumber, this.otp).subscribe(
//       (response) => {
//         //this.isNumberSubmitted =true;
//         console.log("onLogin with OTP", response);
//         //this.router.navigate(['welcome']);
//         this.navCtrl.navigateRoot("tabs/landing", { animationDirection: "forward" });
//         this.util.setMenuState(true);
//         console.log("Clicked");
//       },
//       (error) => {
//         //this.isNumberSubmitted = false;
//         console.log("Error in onLogin()", error);
//       }
//     );
//   }

//   onNumberSubmitted() {
//     this.login.generateOtp(this.name, this.inputNumber).subscribe(
//       (response) => {
//         this.isNumberSubmitted = true;
//         console.log("NumberSubmitted", response);
//         localStorage.setItem("isLoggedIn", "true");
//       },
//       (error) => {
//         this.isNumberSubmitted = false;
//       }
//     );
//   }
// }

import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { BehaviorSubject } from "rxjs";
import { ModalController } from "@ionic/angular";
import { SignupPage } from "../signup/signup.page";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  public sms = new FormControl("+919860067118");
  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject("");
  public errorMessage = this.errorMessage_.asObservable();

  constructor(
    private router: Router,
    private auth: AuthService,
    private modalCtrl: ModalController
  ) {}

  public async signIn() {
    console.log("In SignIn", this.sms.value);
    this.busy_.next(true);
    //this.errorMessage_.next('');
    try {
      await this.auth.signIn(this.sms.value);
      console.log(this.sms.value);
      this.router.navigate(["/answer-challenge"]);
    } catch (err) {
      this.errorMessage_.next(err.message || err);
      this.nonUsers(this.sms.value);
      // this.router.navigate(['/signup']);
    } finally {
      this.busy_.next(false);
    }
  }

  async nonUsers(phno) {
    let modal = await this.modalCtrl.create({
      component: SignupPage,
      cssClass: "cart-modal",
      componentProps: {
        "phno": phno
      },
    });
    modal.present();
  }
}
