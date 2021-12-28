import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  currentLanguage: any = new BehaviorSubject<string>('');

  languages = {
   kannada :{
    "Phone Number": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    "GET OTP": "ಒಟಿಪಿ ಪಡೆಯಿರಿ",
    "Please Sign Up": "ದಯವಿಟ್ಟು ಸೈನ್ ಅಪ್ ಮಾಡಿ",
    "We'd be happy to have you join our community!": "ನೀವು ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಸೇರಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ!",
    "You are almost there!": "ನೀವು ಬಹುತೇಕ ಅಲ್ಲಿದ್ದೀರಿ!",
    "Full Name": "ಪೂರ್ಣ ಹೆಸರು",
    "Continue without login": "ಲಾಗಿನ್ ಮಾಡದೆಯೇ ಮುಂದುವರಿಸಿ",
    "SIGN UP": "ಸೈನ್ ಅಪ್ ಮಾಡಿ",
    "Already signed up?": "ಈಗಾಗಲೇ ಸೈನ್ ಅಪ್ ಮಾಡಲಾಗಿದೆ?",
    "Sign in": "ಸೈನ್ ಇನ್ ಮಾಡಿ",
    "Sign-In": "ಸೈನ್-ಇನ್",
    "Please enter the secret code you received to complete sign-in": "ಸೈನ್-ಇನ್ ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ನೀವು ಸ್ವೀಕರಿಸಿದ ರಹಸ್ಯ ಕೋಡ್ ಅನ್ನು ನಮೂದಿಸಿ",
    "Continue": "ಮುಂದುವರಿಸಿ",
    "Sell your cattle at the best price online.": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಉತ್ತಮ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಿ.", 
    "Buy your preferred breed of cattle from wide range in just one click": "ಕೇವಲ ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ತಳಿಯ ಜಾನುವಾರುಗಳನ್ನು ವ್ಯಾಪಕ ಶ್ರೇಣಿಯಿಂದ ಖರೀದಿಸಿ",
    "Order Animal Medicine at huge discount by ‘search’ or by ‘uploading doctor’s prescription’. Get Home Delivery": "'ಹುಡುಕಾಟ' ಅಥವಾ 'ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೂಲಕ' ಅನಿಮಲ್ ಮೆಡಿಸಿನ್ ಅನ್ನು ಭಾರಿ ರಿಯಾಯಿತಿಯಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ. ಹೋಮ್ ಡೆಲಿವರಿ ಪಡೆಯಿರಿ",
    "Order best Cattle Feeds from famous suppliers at anywhere in India. Increase Milk yield.": "ಭಾರತದಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಪ್ರಸಿದ್ಧ ಪೂರೈಕೆದಾರರಿಂದ ಉತ್ತಮ ಜಾನುವಾರು ಮೇವುಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ. ಹಾಲಿನ ಇಳುವರಿ ಹೆಚ್ಚಿಸಿ.",  
    "Search Cattles": "ದನಗಳನ್ನು ಹುಡುಕಿ",
    "FREE VET DOCTOR 24/7": "ಉಚಿತ ವೆಟ್ ಡಾಕ್ಟರ್ 24/7",
    "BUY/SELL": "ಖರೀದಿ/ಮಾರಾಟ",
    "ANIMAL": "ಪ್ರಾಣಿ",
    "VET": "ಪಶುವೈದ್ಯಕೀಯ",
    "FEED": "ಫೀಡ್",
    "MEDICINE": "ಔಷಧಿ",
    "TODAY's OFFERS": "ಇಂದಿನ ಕೊಡುಗೆಗಳು",
    "Offer Details": "ಆಫರ್ ವಿವರಗಳು",
    "HELP": "ಸಹಾಯ",
    "HOME": "ಮನೆ",
    "PROFILE": "ಖಾತೆ",
    "MY CART": "ನನ್ನ ವಸ್ತುಗಳು",
    "FAVORITE": "ನೆಚ್ಚಿನ",
    "ORDERS": "ಆದೇಶಗಳು",
    "MY ADs": "ನನ್ನ ಜಾಹೀರಾತು",
    "VET PHARMA": "ಪಶುವೈದ್ಯಕೀಯ ಔಷಧಿ",
    "BACK": "ಹಿಂದೆ",
  },
  };

  constructor() { }

  doTranslation(text, value){
    let val = value;
    if(val === null){
      val = "en";
    }
    let languageObj = this.languages[val];
    if(languageObj !== undefined){
      if(languageObj[text] !== undefined){
        return languageObj[text];
      }
      else{
        return text;
      }
    }
    else{
      return text;
    }
  }
}
