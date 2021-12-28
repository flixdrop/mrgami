import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage implements OnInit{

  @Input() phno: any;
  signup_form: FormGroup;
  
  ngOnInit(){
    this.signup_form = new FormGroup({
    fullname: new FormControl(),
    sms: new FormControl( this.phno, [Validators.minLength(10), Validators.maxLength(10)])
    });
  }

  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject('');
  public errorMessage = this.errorMessage_.asObservable();

  constructor(private router: Router, private auth: AuthService, private modalCtrl: ModalController,
      private translateService: TranslateService
    ) { }

  public async signup() {
    this.errorMessage_.next('');
    this.busy_.next(true);
    try {
      await this.auth.signUp(this.signup_form.get('sms').value, this.signup_form.get('fullname').value);
      await this.auth.signIn(this.signup_form.get('sms').value);
      this.modalCtrl.dismiss();
      this.router.navigate(['/answer-challenge']);
    } catch (err) {
      console.log(err);
      this.errorMessage_.next(err.message || err);
    } finally {
      this.busy_.next(false);
    }
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }

}
