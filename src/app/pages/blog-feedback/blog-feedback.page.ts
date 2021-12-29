import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { TranslateService } from "src/app/services/translate.service";
import { FeedbackModalPage } from "../feedback-modal/feedback-modal.page";

@Component({
  selector: "app-blog-feedback",
  templateUrl: "./blog-feedback.page.html",
  styleUrls: ["./blog-feedback.page.scss"],
})
export class BlogFeedbackPage implements OnInit {

  expand: boolean = false;

  constructor(private modalCtrl: ModalController, private translateService: TranslateService) { }

  ngOnInit() {
    this.expand= false;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  onClickReadMore(){
    this.expand = !this.expand;
  }

  async feedbackModal(){
    let modal = await this.modalCtrl.create({
      component: FeedbackModalPage,
      cssClass: "cart-modal",
    });
    modal.present();
  }

  onClickFeedback(){
    this.feedbackModal();
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }

}
