import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage  {

  sms = new FormControl('');
  fullName = new FormControl('');

  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject('');
  public errorMessage = this.errorMessage_.asObservable();

  constructor(private router: Router, private auth: AuthService) { }

  public async signup() {
    this.errorMessage_.next('');
    this.busy_.next(true);
    try {
      await this.auth.signUp(this.sms.value, this.fullName.value);
      await this.auth.signIn(this.sms.value);
      this.router.navigate(['/answer-challenge']);
    } catch (err) {
      console.log(err);
      this.errorMessage_.next(err.message || err);
    } finally {
      this.busy_.next(false);
    }
  }

}
