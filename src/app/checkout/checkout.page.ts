import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  paymentHandler: any = null;
  setPayment = false;
  amount: number;
  constructor() {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.invokeStripe();
  }
  onPayClick(){
    this.setPayment=true;
    console.log(this.setPayment);
  }
  makePayment() {
    const am = this.amount;
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
      amount: am * 100
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

}
