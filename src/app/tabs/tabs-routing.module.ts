import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { IntroGuard } from '../guards/intro.guard';
// import { AutoLoginGuard } from '../guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  { path: 'welcome',
  loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule)},
  {
    path: 'welcome',
    loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule),
    children:[
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      },
    ],
  },
  {
    path: 'seller-form',
    loadChildren: () => import('../seller-form/seller-form.module').then( m => m.SellerFormPageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('../item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('../pages/medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'myads',
    loadChildren: () => import('../pages/myads/myads.module').then( m => m.MyadsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('../landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('../my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('../my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('../favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('../checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/home',d
  // }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
