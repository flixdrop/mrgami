import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { GetlocationComponent } from '../components/getlocation/getlocation.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  address: string;
  latitude: number;
  a: any;

  constructor(
    private animatioCntrl: AnimationController,
  private getlocation:GetlocationComponent) { }

  ngOnInit() {
    this.activeVariation = 'size';
    this.location();
   
  }

  async location(){
    await this.getlocation.getGeolocation();
    this.address = this.getlocation.address;
   await console.log(this.getlocation.latitude)
   this.latitude= this.getlocation.latitude
    console.log(this.address)
    // console.log(this.getlocation.address[0]['locality'])
  }
  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }

}
