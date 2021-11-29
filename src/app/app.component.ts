import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isMenuEnabled:boolean = true;
  public selectedIndex = 0;
  form = new FormGroup({});

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private util: UtilService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.platform.is('android')) {
        this.statusBar.styleLightContent();
      }
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.selectedIndex = 1;
    
    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }
}
