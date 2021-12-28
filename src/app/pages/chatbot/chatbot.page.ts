import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  messages = [
    {
      user: "prathamesh",
      createdAt: new Date().getTime(),
      msg: "Hii, how are you?"
    },
    {
      user: "vaishnao",
      createdAt: new Date().getTime(),
      msg: "I'm good, thanks! What about you?"
    }
  ]
  currentUser: any = 'vaishnao';
  newMsg: string = '';
  @ViewChild(IonContent) content: IonContent;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  sendMessage(){
    this.messages.push({
      user: 'vaishnao',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    this.content.scrollToBottom(250);
  }
}
