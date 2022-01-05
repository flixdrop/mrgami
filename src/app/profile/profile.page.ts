import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '../services/translate.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage implements OnInit {  
  private userDetails_: BehaviorSubject<any[]> = new BehaviorSubject(undefined);
  public userDetails = this.userDetails_.asObservable();
  public userDetailsForm = new FormGroup({});

  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  private errorMessage_ = new BehaviorSubject('');
  public errorMessage = this.errorMessage_.asObservable();

  userId: any;

  constructor(private auth: AuthService, private router: Router, private translateService: TranslateService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  public async getUserDetails() {
    this.busy_.next(true);
    this.errorMessage_.next('');
    try {
      const userDetails = await this.auth.getUserDetails();
      userDetails.forEach(detail => {
        const control = new FormControl(detail.getValue());
        this.userDetailsForm.addControl(detail.getName(), control);
        console.log('form-data- ', this.userDetailsForm);
      });
      this.userDetails_.next(userDetails);
      console.log('user-details- ', userDetails);
      console.log('userId- ', userDetails[0]['Value']);
    } catch (err) {
      this.errorMessage_.next(err.message || err);
    } finally {
      console.log('user-details- ', this.userDetails);
      this.busy_.next(false);
    }
  }

  async onClickLogout(){
    await this.auth.signOut();
    this.router.navigateByUrl('/tabs/landing');
    
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }
}
