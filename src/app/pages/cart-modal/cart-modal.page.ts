import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product, CartService } from "./../../services/cart.service";
import { ModalController, AlertController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { MedModalPage } from "../med-modal/med-modal.page";
import JsonFile from "../../services/adform.json";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { FormControlObject } from "src/app/seller-form/seller-form.page";
import { TranslateService } from "src/app/services/translate.service";

@Component({
  selector: "app-cart-modal",
  templateUrl: "./cart-modal.page.html",
  styleUrls: ["./cart-modal.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];
  paymentHandler: any = null;
  setPayment = false;
  amount: number;
  totalAmount: number;
  jsonform: any = JsonFile;
  public addressForm: FormGroup = this.fb.group({});
  flag: boolean = false;
  addressData: any = [];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.addressForm = this.fb.group({});
    this.createForm(this.jsonform.address);
    this.cart = this.cartService.getCart();
    this.invokeStripe();
  }

  createForm(controls: Array<FormControlObject>) {
    for (let control of controls) {
      const formControl = new FormControl();
      this.addressForm.addControl(control.name, formControl);
    }
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

  nextAddress() {
    this.flag = true;
  }

  onSelectAddress(event) {
    console.log("event- ", event);
  }

  addAddress() {
    this.addressData.push(this.addressForm.get("address").value);
    this.addressForm.reset();
  }

  deleteAddress(i) {
    this.addressData.splice(i, 1);
  }

  //Payment gateway integration

  onPayClick() {
    this.setPayment = true;
    console.log(this.setPayment);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  makePayment() {
    this.addressForm.reset();
    const am = this.getTotal();
    console.log("am", am);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72",
      locale: "auto",
      currency: "inr",
      email: "prathamesh@flixdrop.com",
      card: "5698478569851452",
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      token(stripeToken: any) {
        console.log(stripeToken);
        alert("Stripe token generated!");
      },
    });

    paymentHandler.open({
      name: "Flixdrop-Medicine-Accessories",
      description: "Medicine",
      amount: am * 100,
    });
    this.cartService.resetCartItemCount();
    this.modalCtrl.dismiss();
  }
  invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72",
          locale: "auto",
          currency: "inr",
          email: "prathamesh@flixdrop.com",
          card: "5698478569851452",
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          token(stripeToken: any) {
            console.log(stripeToken);
            alert("Payment has been successfull!");
          },
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

  async medModal(product) {
    let modal = await this.modalCtrl.create({
      component: MedModalPage,
      cssClass: "cart-modal",
      componentProps: {
        name: product.name,
        image: product.image,
        price: product.price,
      },
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

  doTranslation(text) {
    var translateText = this.translateService.doTranslation(
      text,
      this.translateService.currentLanguage.value
    );
    return translateText;
  }
}
