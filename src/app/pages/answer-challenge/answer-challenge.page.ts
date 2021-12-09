// import { Component, OnInit, OnDestroy, AfterContentInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import {  BehaviorSubject, Subscription } from 'rxjs';
// import { tap } from 'rxjs/operators';
// @Component({
//   selector: 'app-answer-challenge',
//   templateUrl: './answer-challenge.page.html',
//   styleUrls: ['./answer-challenge.page.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class AnswerChallengePage implements OnInit, OnDestroy, AfterContentInit {

//   digit1 = new FormControl('');
//   digit2 = new FormControl('');
//   digit3 = new FormControl('');
//   digit4 = new FormControl('');
//   digit5 = new FormControl('');
//   digit6 = new FormControl('');
//   @ViewChild('digit1el', { read: ElementRef }) digit1element: ElementRef;
//   @ViewChild('digit2el', { read: ElementRef }) digit2element: ElementRef;
//   @ViewChild('digit3el', { read: ElementRef }) digit3element: ElementRef;
//   @ViewChild('digit4el', { read: ElementRef }) digit4element: ElementRef;
//   @ViewChild('digit5el', { read: ElementRef }) digit5element: ElementRef;
//   @ViewChild('digit6el', { read: ElementRef }) digit6element: ElementRef;

//   private errorMessage_ = new BehaviorSubject('');
//   public errorMessage = this.errorMessage_.asObservable();

//   private busy_ = new BehaviorSubject(false);
//   public busy = this.busy_.asObservable();

//   private allSubscriptions = new Subscription();

//   private sms_ = new BehaviorSubject('');
//   public sms = this.sms_.asObservable();

//   constructor(private auth: AuthService, private router: Router) { }

//    ngOnInit() {

//     // Get e-mail address the code was sent to
//     // It is a public challenge parameter so let's try it that way
//      this.auth.getPublicChallengeParameters()
//       .then(param => this.sms_.next(param.sms));

//     // Move focus to next field upon entry of a digit
//     [2, 3, 4, 5, 6].forEach(digit => {
//       const prev = this[`digit${digit - 1}`] as FormControl;
//       const next = this[`digit${digit}element`] ;
//       console.log(next);
//       this.allSubscriptions.add(prev.valueChanges.pipe(
//         tap(() => {
//           if (prev.value) {
//            console.log(prev.value, prev,next);
//           //  console.log('BeforesetTimeout');
//           //  setTimeout(() => {
//             console.log(next.nativeElement);
//             next.nativeElement.focus();
//             next.nativeElement.setSelectionRange(0, 1);
//              console.log(next.nativeElement);
//           //  }, 5000);
//           }
//         })
//       ).subscribe());
//     });

//     // If the user copy pastes the code into the first digit field
//     // we'll be so kind to cut it in 6 pieces and distribute it to the right fields
//     this.allSubscriptions.add(
//       this.digit1.valueChanges.pipe(
//         tap(value => {
//           if (value && value.length > 1) {
//             const digits = value.split('').slice(0, 6);
//             this.digit1.setValue(digits[0]);
//             this.digit2.setValue(digits[1]);
//             this.digit3.setValue(digits[2]);
//             this.digit4.setValue(digits[3]);
//             this.digit5.setValue(digits[4]);
//             this.digit6.setValue(digits[5]);
//           }
//         })
//       ).subscribe()
//     );
//   }

//   ngOnDestroy() {
//     this.allSubscriptions.unsubscribe();
//   }

//   ngAfterContentInit() {
//     if(1){
//     try{
//       this.digit1element.nativeElement.focus();
//       console.log('Hello TRY ngAfterContentInit');
//     }catch{
//       console.log('Hello Catch ngAfterContentInit');
//     }
//   }
//   }

//   public async submit() {
//     try {
//       this.errorMessage_.next('');
//       this.busy_.next(true);
//       const answer = [1, 2, 3, 4, 5, 6]
//         .map(digit => (this[`digit${digit}`] as FormControl).value)
//         .join('');
//       const loginSucceeded = await this.auth.answerCustomChallenge(answer);
//       if (loginSucceeded) {
//         this.router.navigate(['/tabs/landing']);
//       } else {
//         this.errorMessage_.next('That\'s not the right code');
//       }
//     } catch (err) {
//       this.errorMessage_.next(err.message || err);
//     } finally {
//       this.busy_.next(false);
//     }
//   }

// }

import { Component, OnInit, OnDestroy, AfterContentInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-answer-challenge',
  templateUrl: './answer-challenge.page.html',
  styleUrls: ['./answer-challenge.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerChallengePage 
// implements 
// OnInit, OnDestroy, 
// AfterContentInit 
{

  // digit1 = new FormControl('');
  // digit2 = new FormControl('');
  // digit3 = new FormControl('');
  // digit4 = new FormControl('');
  // digit5 = new FormControl('');
  // digit6 = new FormControl('');
  // @ViewChild('digit1el', { read: ElementRef }) digit1element: ElementRef;
  // @ViewChild('digit2el', { read: ElementRef }) digit2element: ElementRef;
  // @ViewChild('digit3el', { read: ElementRef }) digit3element: ElementRef;
  // @ViewChild('digit4el', { read: ElementRef }) digit4element: ElementRef;
  // @ViewChild('digit5el', { read: ElementRef }) digit5element: ElementRef;
  // @ViewChild('digit6el', { read: ElementRef }) digit6element: ElementRef;

  // @ViewChild('a', { read: ElementRef }) digit1element: ElementRef;
  // @ViewChild('b', { read: ElementRef }) digit2element: ElementRef;
  // @ViewChild('c', { read: ElementRef }) digit3element: ElementRef;
  // @ViewChild('d', { read: ElementRef }) digit4element: ElementRef;
  // @ViewChild('e', { read: ElementRef }) digit5element: ElementRef;
  // @ViewChild('f', { read: ElementRef }) digit6element: ElementRef;

  otpString: any = [];
  answer_1: any;

  private errorMessage_ = new BehaviorSubject('');
  public errorMessage = this.errorMessage_.asObservable();

  private busy_ = new BehaviorSubject(false);
  public busy = this.busy_.asObservable();

  // private allSubscriptions = new Subscription();

  // private sms_ = new BehaviorSubject('');
  // public sms = this.sms_.asObservable();

  constructor(private auth: AuthService, private router: Router) { }

  //  ngOnInit() {

  //   // Get e-mail address the code was sent to
  //   // It is a public challenge parameter so let's try it that way
  //    this.auth.getPublicChallengeParameters()
  //     .then(param => this.sms_.next(param.sms));

  //   // Move focus to next field upon entry of a digit
  //   [2, 3, 4, 5, 6].forEach(digit => {
  //     const prev = this[`digit${digit - 1}`] as FormControl;
  //     const next = this[`digit${digit}element`];
  //     console.log(next);
  //     this.allSubscriptions.add(prev.valueChanges.pipe(
  //       tap(() => {
  //         // if (prev.value) {
  //         //  console.log(prev.value, prev,next);
  //         // //  console.log('BeforesetTimeout');
  //         // //  setTimeout(() => {
  //         //   console.log(next.nativeElement);
  //         //   next.nativeElement.focus();
  //         //   next.nativeElement.setSelectionRange(0, 1);
  //         //    console.log(next.nativeElement);
  //         // //  }, 5000);
  //         // }
  //         if (prev.value === 8 && prev) {
  //           prev.value.setFocus();
  //         } else if (prev.value >= 48 && prev.value <= 57) {
  //           if (next) {
  //             next.setFocus();
  //           }
  //         } else if (prev.value >= 96 && prev.value <= 105) {
  //           if (next) {
  //             next.setFocus();
  //           }
  //         } else {
  //           // prev = '';
  //         }
  //       }
        
  //       )
  //     ).subscribe());
  //   });

  //   // If the user copy pastes the code into the first digit field
  //   // we'll be so kind to cut it in 6 pieces and distribute it to the right fields
  //   this.allSubscriptions.add(
  //     this.digit1.valueChanges.pipe(
  //       tap(value => {
  //         if (value && value.length > 1) {
  //           const digits = value.split('').slice(0, 6);
  //           this.digit1.setValue(digits[0]);
  //           this.digit2.setValue(digits[1]);
  //           this.digit3.setValue(digits[2]);
  //           this.digit4.setValue(digits[3]);
  //           this.digit5.setValue(digits[4]);
  //           this.digit6.setValue(digits[5]);
  //         }
  //       })
  //     ).subscribe()
  //   );
  // }

  // ngOnDestroy() {
  //   this.allSubscriptions.unsubscribe();
  // }

  // ngAfterContentInit() {
  //   if(1){
  //   try{
  //     this.digit1element.nativeElement.focus();
  //     console.log('Hello TRY ngAfterContentInit');
  //   }catch{
  //     console.log('Hello Catch ngAfterContentInit');
  //   }
  // }
  // }

  moveFocus(event, nextElement, previousElement) {
    console.log(nextElement);
    console.log(previousElement);
    if (event.keyCode == 8 && previousElement) {
      previousElement.setFocus();
      this.otpString.pop();

    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
        this.otpString.push(event.key);
      }
    } 
    else if (event.keyCode >= 96 && event.keyCode <= 105) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } 
    else {
      event.path[0].value = '';
    }
  }

  public async submit() {
    try {
      this.errorMessage_.next('');
      this.busy_.next(true);
      // const answer = [1, 2, 3, 4, 5, 6]
      //   .map(digit => (this[`digit${digit}`] as FormControl).value)
      //   .join('');
      const answer = this.otpString.join('');
      this.answer_1 = this.otpString.join('');
      const loginSucceeded = await this.auth.answerCustomChallenge(answer);
      if (loginSucceeded) {
        this.router.navigate(['/tabs/landing']);
      } else {
        this.errorMessage_.next('That\'s not the right code');
      }
    } catch (err) {
      this.errorMessage_.next(err.message || err);
    } finally {
      this.busy_.next(false);
    }
  }

}