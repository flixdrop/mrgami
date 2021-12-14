import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//Product
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string,
  amount: number;
}
// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}
export interface ITodaysOffers {
  id: number,
  name: string,
  image: string,
}
// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'Medicine1', price: 120, image:'../../assets/products/medicine1.jpg', amount: 0 },
    { id: 1, name: 'Medicine2', price: 150, image:'../../assets/products/medicine2.jpg', amount: 0 },
    { id: 2, name: 'Medicine3', price: 100, image:'../../assets/products/medicine3.jpg', amount: 0 },
    { id: 3, name: 'Medicine4', price: 200, image:'../../assets/products/medicine4.jpg',  amount: 0 }
  ];

  data_1: Product[] = [
    { id: 0, name: 'Feed1', price: 250, image:'../../assets/animal-feed/feed_1.jpg', amount: 0 },
    { id: 1, name: 'Feed2', price: 350, image:'../../assets/animal-feed/feed_2.jpg', amount: 0 },
    { id: 2, name: 'Feed3', price: 400, image:'../../assets/animal-feed/feed_3.jpg', amount: 0 },
    { id: 3, name: 'Feed4', price: 500, image:'../../assets/animal-feed/feed_4.jpg',  amount: 0 }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  getProducts() {
    return this.data;
  }

  getAnimalFeed(){
    return this.data_1;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product: Product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }  
 
  decreaseProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  getTodaysOffers(): any[] {
    let todaysOffers = [];

    let cat1: ITodaysOffers = {
      id: 1,
      name: '',
      image: '../../assets/product-slider/prod-slide3.jpg'
    }
    let cat2: ITodaysOffers = {
      id: 2,
      name: '',
      image: '../../assets/product-slider/prod-slide3.jpg'
    }
    let cat3: ITodaysOffers = {
      id: 3,
      name: '',
      image: '../../assets/product-slider/prod-slide3.jpg'
    }

    todaysOffers.push(cat1, cat2, cat3);

    return todaysOffers;
  }

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Cows',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Goats',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Buffalos',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Heifer',
      price: 55000,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Ox',
      price: 140000,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Goat',
      price: 20000,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Cow',
      price: 55000,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Buffalo',
      price: 34000,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Ox',
      price: 40000,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
