import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.page.html',
  styleUrls: ['./feedback-modal.page.scss'],
})
export class FeedbackModalPage implements OnInit {

  feedbackForm: FormGroup;
  name: any;
  constructor(private auth: AuthService, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.auth.getUserDetails().then(res=> {
      console.log('res- ', res);
      this.name = res[1]['Value'];
    })
    this.feedbackForm = new FormGroup({
      feedback: new FormControl(''),
      email: new FormControl('')
    });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  onClickSubmit(){
    console.log('feedback- ', this.feedbackForm.value);
    this.modalCtrl.dismiss();
  }

}
