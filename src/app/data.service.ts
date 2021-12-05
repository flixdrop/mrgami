import { Injectable } from '@angular/core';
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
export class DataService {
  
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
