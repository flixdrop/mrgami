/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent, IonSlides, NavController, ToastController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalController, AlertController } from '@ionic/angular';
import { GetAnimalData, SellerFormApiService } from '../services/seller-form-api.service';
import { DataService } from '../data.service';
import JsonFile from '../services/adform.json';
import { PreviewModalPage } from '../pages/preview-modal/preview-modal.page';
import { HttpClient } from '@angular/common/http';
import { stat } from 'fs';

export interface FormControlObject{
  name: string;
  animalbreed: string;
  animaltype: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.page.html',
  styleUrls: ['./seller-form.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SellerFormPage implements OnInit {

  stateList: any;
  adForm: any = JsonFile;
  public myForm: FormGroup = this.fb.group({});
  animalTypeSelected: any;
  stateSelected: any;
  stateIndex: any;
  flag: boolean = false;

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('billingFormRef', { static: false }) billingFormRef: NgForm;
  @ViewChild('shippingFormRef', { static: false }) shippingFormRef: NgForm;
  @ViewChild('paymentFormRef', { static: false }) paymentFormRef: NgForm;

  public order: any = {
    id: 1,
    items: [{
      id: 1,
      name: 'Denim T-Shirt',
      amount: 15.00,
    }, {
      id: 1,
      name: 'Denim Pants',
      amount: 5.00,
    }, {
      id: 1,
      name: 'Black T-Shirt',
      amount: 5.00,
    }],
    subtotal: 25.00,
    shippingFee: 5.00,
    total: 30.00,
  };

  public billingForm: FormGroup;
  public paymentForm: FormGroup;
  public shippingForm: FormGroup;
  public imagePath: SafeResourceUrl;
  public states = [];
  public districts = [];
  public towns = [];

  files: FileList;
  
  public slidesOpts = {
    allowTouchMove: false,
    autoHeight: true,
  };

  public slides: string[];
  public currentSlide: string;
  public isBeginning = true;
  public isEnd = false;
  types: string[];
  imagesList: string[]=[''];
  breeds: string[];
  dat: string;
  data2: GetAnimalData;
  public testup(event){ this.files=event.target.files;
  console.log("Files/Uploaded Images"+this.files);
  }
  get billingFirstName(): AbstractControl {
    return this.billingForm.get('animal_name');
  }

  get billingLastName(): AbstractControl {
    return this.billingForm.get('description');
  }

  get billingTypes(): AbstractControl {
    return this.billingForm.get('cattle_types');
  }

  get billingEmail(): AbstractControl {
    return this.billingForm.get('asking_price');
  }

  get billingAddress(): AbstractControl {
    return this.billingForm.get('weight');
  }

  get billingCity(): AbstractControl {
    return this.billingForm.get('age');
  }

  get billingState(): AbstractControl {
    return this.billingForm.get('lactation');
  }

  get billingZip(): AbstractControl {
    return this.billingForm.get('milk_perday');
  }

  get billingCountryCode(): AbstractControl {
    return this.billingForm.get('country_code');
  }

  get shippingAddress(): AbstractControl {
    return this.shippingForm.get('owners_name');
  }

  get shippingPhone(): AbstractControl {
    return this.shippingForm.get('phone');
  }

  get shippingDeliveryTime(): AbstractControl {
    return this.shippingForm.get('state');
  }

  get paymentNumber(): AbstractControl {
    return this.paymentForm.get('number');
  }

  get paymentExpiration(): AbstractControl {
    return this.paymentForm.get('expiration');
  }

  get paymentCvv(): AbstractControl {
    return this.paymentForm.get('cvv');
  }

  constructor(private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private modalCtrl: ModalController, private alertCtrl: AlertController,
    private sellerFormApiService: SellerFormApiService,
    public toastController: ToastController,
    private dataService:DataService, 
    private fb: FormBuilder,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({});
    if(this.flag === false){
      this.createForm(this.adForm.form_1);
    } 
    this.http.get('https://gist.githubusercontent.com/Dhaneshmonds/1b0ca257b1c34e4842528dcb826ee880/raw/3a7d98354cc43158162eb47d990073105788f348/IndianStatesDistricts.json').subscribe(res => {
      console.log('res- ', res);
      this.stateList = res;
    });
    this.buildSlides();
    this.states = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP'];
    this.districts = ['Bangalore', 'Mumbai', 'Tuticorin', 'Amravati', 'Lucknow'];
    this.towns = ['Bangalore', 'Mumbai', 'Tuticorin', 'Amravati', 'Lucknow'];
    this.types = ['Cow', 'Buffalo', 'Ox'];
    this.breeds = ['Sindhi', 'Jersey', 'Desi'];
  }

  onSelectAnimalType(event){
    this.animalTypeSelected = event.detail.value;
    console.log('animalTypeSelected- ', this.animalTypeSelected);
  }

  onSelectState(event){
    console.log('event- ', event);
    this.stateSelected = event.detail.value;
    for(var key in this.stateList.states){
      if(this.stateList.states[key].name === this.stateSelected){
        this.stateIndex = key;
      }
    }
  }

  createForm(controls: Array<FormControlObject>){
    for(let control of controls){
      const formControl = new FormControl();
      this.myForm.addControl(control.name, formControl);
    }
  }

  onSubmit(){
    console.log('form value- ', this.myForm.value);
    console.log('form validity- ', this.myForm.valid);
    this.myForm.reset();
    }

  // ionViewDidEnter() {
  //   this.ionSlides.update(); //This resolved the issue of content not showing up
  //   // this.setupForm();
  //   // this.buildSlides();
  //   // this.times = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP',];
  //   // this.types = ['Cow', 'Buffalo', 'Ox',];
  //   //this.ionSlides.updateAutoHeight();
  //   //console.log("ionViewDidEnter");
  //   // this.setupForm();
  //   // this.buildSlides();
  //   // this.times = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP',];
  //   // this.types = ['Cow', 'Buffalo', 'Ox',];
  // }

  buildSlides() {
    const slides = ['Animal', 'Seller-Info', 'Summary', 'Publish'];
    this.currentSlide = slides[0];
    this.slides = slides;
  }

  async onClickNext(){
    this.flag = true;
    if(this.flag === true){
      this.createForm(this.adForm.form_2);
    }
  }

  async onClickPublish(){
  //  let json1 = this.billingForm.getRawValue();
  //  let json2 = this.shippingForm.getRawValue();
  //  let json = {...json1,...json2}
  // let adformData = this.myForm.getRawValue();
  let adformData = {
    "animalDetails": {
      "age": this.myForm.get('age').value,
      "animalName": this.myForm.get('animalName').value,
      "askingPrice": this.myForm.get('quotedPrice').value,
      "description": this.myForm.get('description').value,
      "lactationNumber": this.myForm.get('lactationNumber').value,
      "milkPerDay": this.myForm.get('milkPerDay').value,
      "weight": this.myForm.get('weight').value
    },
    "breed": this.myForm.get('breed').value,
    "imageUrls": {
      "imagesList": this.myForm.get('imagesList').value
    },
    "sellerInformation": {
      "district": this.myForm.get('district').value,
      "ownerName": this.myForm.get('ownerName').value,
      "phone": this.myForm.get('phone').value,
      "state": this.myForm.get('state').value,
      "town": this.myForm.get('town').value
    },
    "type": this.myForm.get('type').value
  };
  console.log('adform json data- ', adformData);

  //  const newForm2 =  {JSON.stringify(this.billingForm.getRawValue()),JSON.stringify(this.shippingForm.getRawValue())}
       this.dat = JSON.stringify(adformData);
        // console.log(json);
        // console.log(JSON.stringify(json));
        console.log('stringify adformData- ', this.dat);
        this.sellerFormApiService.saveData(this.dat).subscribe((dat) => {
          this.dat = dat;
          console.log('stringify adformData_1- ',this.dat);
        });
        this.myForm.reset();
        this.presentToast();
        this.presentModal(adformData);
        this.flag = false;
        // return await this.modalCtrl.dismiss();
  }
  setupForm() {
    this.billingForm = new FormGroup({
      animalDetails: new FormGroup({
        age: new FormControl('5', Validators.required),
        animalName: new FormControl('Sakhu', Validators.required),
        askingPrice: new FormControl('50000', Validators.required),
        description: new FormControl('Milking Everyday', Validators.required),
        lactationNumber: new FormControl('Yes', Validators.required),
        milkPerDay: new FormControl('3', Validators.required),
        weight: new FormControl('10', Validators.required),
      }),
      // animal_name: new FormControl('Sakhu', Validators.required),
      // description: new FormControl('Milking Everyday', Validators.required),
      type: new FormControl(null, Validators.required),
      breed: new FormControl(''),
  
      // asking_price: new FormControl('50000', Validators.required),
      // weight: new FormControl('10', Validators.required),
      // age: new FormControl('5', Validators.required),
      // lactation: new FormControl('Yes', Validators.required),
      // milk_per_day: new FormControl('3', Validators.required),
      // country_code: new FormControl('IN', Validators.required),
    });

    // this.shippingForm = new FormGroup({
    //   sellerInformation: new FormGroup({
    //     ownerName: new FormControl('Prathamesh', Validators.required),
    //   phone: new FormControl('+919860067118', Validators.required),
    //   state: new FormControl(null, Validators.required),
    //   town: new FormControl(''),
    //   district: new FormControl(''),
    //  // message: new FormControl(''),
    //   }),
    //   imageUrls: new FormGroup({
    //     imagesList: new FormControl()
    //   }),
    // });

    this.paymentForm = new FormGroup({
      // eslint-disable-next-line id-blacklist
      number: new FormControl('', Validators.required),
      expiration: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
    });
  }

  async onSlidesChanged() {
    const index = await this.ionSlides.getActiveIndex();
    this.currentSlide = this.slides[index];
    this.isBeginning = await this.ionSlides.isBeginning();
    this.isEnd = await this.ionSlides.isEnd();
  }

  onSlidesDidChange() {
    this.ionContent.scrollToTop();
  }

  onBackButtonTouched() {
    this.ionSlides.slidePrev();
    this.ionContent.scrollToTop();
  }

  // onNextButtonTouched() {

  //   if (this.currentSlide === 'Animal') {

  //     this.billingFormRef.onSubmit(undefined);

  //     if (this.billingForm.valid) {
  //       this.ionSlides.slideNext();
  //       this.ionContent.scrollToTop();
  //     }

  //   } else if (this.currentSlide === 'Seller-Info') {

  //     this.shippingFormRef.onSubmit(undefined);

  //     if (this.shippingForm.valid) {
        
       
        
  //       this.ionSlides.slideNext();
  //       this.ionContent.scrollToTop();
  //     }

  //   } else if (this.currentSlide === 'Publish') {
     
   
  //     this.paymentFormRef.onSubmit(undefined);

  //     if (this.paymentForm.valid) {
        
  //       this.navCtrl.navigateRoot('/thanks', {
  //         animated: true,
  //         animationDirection: 'forward',
  //       });
  //     }

  //   }  else {

  //     this.ionSlides.slideNext();
  //     this.ionContent.scrollToTop();
  //   }
  // }
  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        console.log("Files",filesAmount);
        
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  //console.log('Before ImageList', event.target.result);
                   this.imagesList.push(event.target.result);
              console.log("ImageList", this.imagesList);
                }
                this.myForm.patchValue({
                  imagesList: this.imagesList
                 });
                reader.readAsDataURL(event.target.files[i]);

                if(i == filesAmount-1){
                  this.imagesList.shift();
              
                 console.log("ImageList After", this.imagesList);
                }
             
               console.log('before',   this.imagesList.length);

        }
        
         console.log('after', this.imagesList.length);
    }
  }



  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });

  async chooseImage(source: CameraSource) {

    try {

      const image = await Camera.getPhoto({
        quality: 70,
        width: 600,
        height: 600,
        preserveAspectRatio: true,
        allowEditing: true,
        correctOrientation: true,
        source,
        resultType: CameraResultType.Uri,
      });

      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
      this.imagePath = safeUrl;
      console.log("Before Imagepath", this.imagePath)

      const response = await fetch(image.webPath);
      const blob = await response.blob();

       const base64 = await this.convertBlobToBase64(blob) as string;
      
       this.imagesList.push(base64);
console.log( this.imagesList);
this.imagePath = this.imagesList;

console.log("After Imagepath",this.imagePath);

      // Send encoded string to server...

    } catch (error) {
      console.warn(error);
    }

  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose an option',
      buttons: [{
        text: 'Photo Library',
        handler: () => {
          this.chooseImage(CameraSource.Photos);
        }
      }, {
        text: 'Camera',
        handler: () => {
          this.chooseImage(CameraSource.Camera);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    return await actionSheet.present();
  }
  showJSON(){
    alert(JSON.stringify(this.shippingForm.getRawValue()));
  }
  showJSONRawValues(){
    
   return this.shippingForm.getRawValue();
  }
  originalOrder = (): number => 0;



  // saveAllData() {
  //   //alert(JSON.stringify(this.data3.getRawValue()));
  //   this.dat = JSON.stringify(this.data3.getRawValue());
  //   this.sellerFormApiService.saveData(this.dat).subscribe((dat) => {
  //     this.dat = dat;
  //     console.log(this.dat);
  //   });
  //   this.presentToast();
  // }
  getAllads() {
    this.sellerFormApiService.getData().subscribe((data2) => {
      this.data2 = data2;
      console.log(data2);
    });
    // console.log('27lines',this.sellerFormApiService.data);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'AD CREATED SUCCESSFULLY',
      position: 'top',
      duration: 5000,
      color: 'success',
      buttons: [
        {
          side: 'end',
          icon: 'checkmark-done-sharp',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentModal(adformdata) {
    console.log('adformdata in modal- ', adformdata);
    const modal = await this.modalCtrl.create({
      component: PreviewModalPage,
      componentProps: {
       data: adformdata
      }
    });
    return await modal.present();
  }
}
