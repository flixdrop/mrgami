import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  currentLanguage: any = new BehaviorSubject<string>('');

  languages = {
    ಕನ್ನಡ :{
    "PHONE NUMBER": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    "Phone Number": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    "enter 10-digits phone no.": "ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು.",
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
    "ENTER OTP!": "OTP ನಮೂದಿಸಿ!",
    "PLEASE ENTER YOUR OTP!": "ದಯವಿಟ್ಟು ನಿಮ್ಮ OTP ಅನ್ನು ನಮೂದಿಸಿ!",
    "Continue": "ಮುಂದುವರಿಸಿ",
    "Sell your cattle at the best price online.": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಉತ್ತಮ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಿ.", 
    "Buy your preferred breed of cattle from wide range in just one click": "ಕೇವಲ ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ತಳಿಯ ಜಾನುವಾರುಗಳನ್ನು ವ್ಯಾಪಕ ಶ್ರೇಣಿಯಿಂದ ಖರೀದಿಸಿ",
    "Order Animal Medicine at huge discount by ‘search’ or by ‘uploading doctor’s prescription’. Get Home Delivery": "'ಹುಡುಕಾಟ' ಅಥವಾ 'ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೂಲಕ' ಅನಿಮಲ್ ಮೆಡಿಸಿನ್ ಅನ್ನು ಭಾರಿ ರಿಯಾಯಿತಿಯಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ. ಹೋಮ್ ಡೆಲಿವರಿ ಪಡೆಯಿರಿ",
    "Order best Cattle Feeds from famous suppliers at anywhere in India. Increase Milk yield.": "ಭಾರತದಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಪ್ರಸಿದ್ಧ ಪೂರೈಕೆದಾರರಿಂದ ಉತ್ತಮ ಜಾನುವಾರು ಮೇವುಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ. ಹಾಲಿನ ಇಳುವರಿ ಹೆಚ್ಚಿಸಿ.",  
    "FINISH": "ಮುಗಿಸು",
    "Search Cattles": "ದನಗಳನ್ನು ಹುಡುಕಿ",
    "FREE VET DOCTOR 24/7": "ಉಚಿತ ವೆಟ್ ಡಾಕ್ಟರ್ 24/7",
    "BUY/SELL": "ಖರೀದಿ/ಮಾರಾಟ",
    "ANIMAL": "ಪ್ರಾಣಿ",
    "VET": "ಪಶುವೈದ್ಯಕೀಯ",
    "FEED": "ಫೀಡ್",
    "MEDICINE": "ಔಷಧಿ",
    "MEDICINES": "ಔಷಧಿಗಳು",
    "TODAY's OFFERS": "ಇಂದಿನ ಕೊಡುಗೆಗಳು",
    "Offer Details": "ಆಫರ್ ವಿವರಗಳು",
    "HELP": "ಸಹಾಯ",
    "HOME": "ಮನೆ",
    "PROFILE": "ಖಾತೆ",
    "MY CART": "ನನ್ನ ವಸ್ತುಗಳು",
    "FAVORITES": "ನೆಚ್ಚಿನ",
    "ORDERS": "ಆದೇಶಗಳು",
    "MY ORDERS": "ಆದೇಶಗಳು",
    "MY ADs": "ನನ್ನ ಜಾಹೀರಾತು",
    "VET PHARMA": "ಪಶುವೈದ್ಯಕೀಯ ಔಷಧಿ",
    "BACK": "ಹಿಂದೆ",
    "BLOG PAGE": "ಬ್ಲಾಗ್ ಪುಟ",
    "Blogs and Feedback": "ಬ್ಲಾಗ್‌ಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",
    "ARTICLE TITLE": "ಲೇಖನ ಶೀರ್ಷಿಕೆ",
    "SUB TITLE OF THE ARTICLE": "ಲೇಖನದ ಉಪಶೀರ್ಷಿಕೆ",
    "READ LESS": "ಕಡಿಮೆ ಓದಿ",
    "READ MORE...": "ಮತ್ತಷ್ಟು ಓದು...",
    "Give Feedback...": "ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ...",
    "Cattle Name": "ಜಾನುವಾರು ಹೆಸರು",
    "Price": "ಬೆಲೆ",
    "Breed": "ತಳಿ",
    "Lactation": "ಹಾಲುಣಿಸುವಿಕೆ",
    "Milk/Day": "ಹಾಲು/ದಿನ",
    "Age": "ವಯಸ್ಸು",
    "DISCARD": "ತಿರಸ್ಕರಿಸು",
    "POST THIS": "ಇದನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ",
    "Search my ADs": "ನನ್ನ ಹುಡುಕಿ ಜಾಹೀರಾತು",
    "Please Wait...": "ದಯಮಾಡಿ ನಿರೀಕ್ಷಿಸಿ...",
    "Status": "ಸ್ಥಿತಿ",
    "Calf": "ಕರು",
    "SUCCESSFULLY POSTED!": "ಯಶಸ್ವಿಯಾಗಿ ಪೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ!",
    "OK!": "ಸರಿ!",
    "ANIMAL FEEDS": "ಪ್ರಾಣಿ ಆಹಾರ",
    "Add to cart": "ಕಾರ್ಟ್ಗೆ ಸೇರಿಸಿ",
    "Save for later": "ನಂತರಕ್ಕೆ ಉಳಿಸು",
    "You have a Promo Code? Apply Here": "ನೀವು ಪ್ರೋಮೋ ಕೋಡ್ ಹೊಂದಿದ್ದೀರಾ? ಇಲ್ಲಿ ಅನ್ವಯಿಸಿ",
    "BOT-CHAT": "ಸಂದೇಶ ಸಹಾಯಕ",
    "E-Mail": "ಇಮೇಲ್",
    "Give Feedback": "ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ",
    "Send Feedback": "ಪ್ರತಿಕ್ರಿಯೆ ಕಳುಹಿಸಿ",
    "Search medicines": "ಔಷಧಿಗಳನ್ನು ಹುಡುಕಿ",
    "Animal Details": "ಪ್ರಾಣಿಗಳ ವಿವರಗಳು",
    "Animal Name": "ಪ್ರಾಣಿಯ ಹೆಸರು -",
    "Animal Type": "ಪ್ರಾಣಿ ಪ್ರಕಾರ -",
    "Animal Breed": "ಪ್ರಾಣಿ ತಳಿ -",
    "Description about the Animal": "ಪ್ರಾಣಿಯ ಬಗ್ಗೆ ವಿವರಣೆ-",
    "Asking Price": "ಬೆಲೆ ಕೇಳಲಾಗುತ್ತಿದೆ -",
    "Animal Weight": "ಪ್ರಾಣಿಗಳ ತೂಕ -",
    "Milk Per Day": "ದಿನಕ್ಕೆ ಹಾಲು -",
    "Seller Details": "ಮಾರಾಟಗಾರರ ವಿವರಗಳು",
    "Owner Name": "ಮಾಲೀಕರ ಹೆಸರು-",
    "Phone No.": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ.-",
    "District": "ಜಿಲ್ಲೆ-",
    "State": "ರಾಜ್ಯ-",
    "Town": "ಪಟ್ಟಣ -",
    "Save": "ಉಳಿಸಿ",
    "USER PROFILE": "ಬಳಕೆದಾರರ ಪ್ರೊಫೈಲ್",
    "User Profile": "ಬಳಕೆದಾರರ ಪ್ರೊಫೈಲ್",
    "edit": "ತಿದ್ದು", 
    "PUBLISH ADs": "ಜಾಹೀರಾತುಗಳನ್ನು ಪ್ರಕಟಿಸಿ",
    "Seller Form": "ಮಾರಾಟಗಾರರ ಫಾರ್ಮ್",
    "Animal Form": "ಪ್ರಾಣಿ ರೂಪ",
    "Upload Images": "ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
    "Animal Age": "ಪ್ರಾಣಿ ವಯಸ್ಸು",
    "BUY ANIMALS": "ಪ್ರಾಣಿಗಳನ್ನು ಖರೀದಿಸಿ",
    "Type of Cattles": "ಜಾನುವಾರುಗಳ ವಿಧ",
    "See all": "ಎಲ್ಲವನ್ನೂ ನೋಡು",
    "Featured": "ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಲಾಗಿದೆ",
    "New AD": "ಹೊಸದು ಜಾಹೀರಾತು",
    "Next": "ಮುಂದೆ",
    "Preview": "ಮುನ್ನೋಟ",
    "AD CREATED SUCCESSFULLY": "ಜಾಹೀರಾತು ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ",
    "Logout": "ಲಾಗ್ ಔಟ್",
    "CART ITEMS": "ಕಾರ್ಟ್ ಐಟಂಗಳು",
    "Order Again": "ಮತ್ತೆ ಆರ್ಡರ್ ಮಾಡಿ",
    "Best Sell": "ಅತ್ಯುತ್ತಮ ಮಾರಾಟ"
    },
  };

  constructor() { }

  doTranslation(text, value){
    let val = value;
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
