import { Component, OnInit } from '@angular/core';
import { Product, CartService } from './../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { MedModalPage } from '../med-modal/med-modal.page';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];
  paymentHandler: any = null;
  setPayment = false;
  amount: number;
  totalAmount: number;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.invokeStripe();
  }
 
  decreaseCartItem(product: Product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product: Product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product: Product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
//Payment gateway integration

onPayClick(){
  this.setPayment=true;
  console.log(this.setPayment);
}
makePayment() {
  const am = this.getTotal();
  console.log('am',am);
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
    locale: 'auto',
    currency: 'inr',
    email: 'prathamesh@flixdrop.com',
    card: '5698478569851452',
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    token(stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    }
  });

  paymentHandler.open({
    name: 'Flixdrop-Medicine-Accessories',
    description: 'Medicine',
    amount: am * 100,
  });
}
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
          locale: 'auto',
          currency: 'inr',
          email: 'prathamesh@flixdrop.com',
          card: '5698478569851452',
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          token(stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          }
        });
      };
      window.document.body.appendChild(script);
    }
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    // let alert = await this.alertCtrl.create({
    //   header: 'Thanks for your Order!',
    //   message: 'We will deliver your order in 2-3 days',
    //   buttons: ['OK']
    // });
    // alert.present().then(() => {
    //   this.modalCtrl.dismiss();
    // });
    
  }

  async medModal(product){
    let modal = await this.modalCtrl.create({
      component: MedModalPage,
      cssClass: "cart-modal",
      componentProps: {
        'name': product.name,
        'image': product.image,
        'price': product.price
      }
    });
    modal.present();
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2500);
  }

}
