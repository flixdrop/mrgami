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
import { TranslateService } from "../services/translate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

  code: any = '+91';

  public sms = new FormControl();
  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject("");
  public errorMessage = this.errorMessage_.asObservable();

  constructor(
    private router: Router,
    private auth: AuthService,
    private modalCtrl: ModalController,
    private translateService: TranslateService
  ) {}

  public async signIn() {
    console.log("In SignIn",  this.code+this.sms.value);
    this.busy_.next(true);
    //this.errorMessage_.next('');
    try {
      await this.auth.signIn(this.code+this.sms.value);
      console.log(this.code+this.sms.value);
      this.router.navigate(["/answer-challenge"]);
    } catch (err) {
      this.errorMessage_.next(err.message || err);
      this.router.navigateByUrl('/tabs/landing');
      this.nonUsers(this.code+this.sms.value);
    } finally {
      this.sms.reset();
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

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }

  onSkipLogin(){
    this.router.navigateByUrl('/tabs/landing');
  }
}
