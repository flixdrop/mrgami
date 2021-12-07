import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing/landing.page';
import { LoginPage } from './login/login.page';
import { AuthGuard, IsNotAuthenticated } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [IsNotAuthenticated]
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule),
    
  },
  {
    path: 'myads-modal',
    loadChildren: () => import('./pages/myads-modal/myads-modal.module').then( m => m.MyadsModalPageModule)
  },
  {
    path: 'med-modal',
    loadChildren: () => import('./pages/med-modal/med-modal.module').then( m => m.MedModalPageModule)
  },
  {
    path: 'login/:id',
   component:LoginPage,
    children:[
      {
        path: 'landing',
        component:LandingPage
      },
    ]

  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [IsNotAuthenticated]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'answer-challenge',
    loadChildren: () => import('./pages/answer-challenge/answer-challenge.module').then( m => m.AnswerChallengePageModule),
    canActivate: [IsNotAuthenticated]
  },

  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}













// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//         path: '',
//         loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
//       },

//     {
//         path: 'login',
//         loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//       },
//       {
//         path: 'signup',
//         loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
//       },

//   {
//     path: 'cart-modal',
//     loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
//   },
//   {
//     path: 'myads-modal',
//     loadChildren: () => import('./pages/myads-modal/myads-modal.module').then( m => m.MyadsModalPageModule)
//   },
//   {
//     path: 'med-modal',
//     loadChildren: () => import('./pages/med-modal/med-modal.module').then( m => m.MedModalPageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'welcome',
//     pathMatch: 'full',
//   },
//   // {
//   //   path: 'welcome',
//   //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
//   //   children:[
//   //     {
//   //       path: 'login',
//   //       loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   //     },
//   //     {
//   //       path: 'signup',
//   //       loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
//   //     },
//   //   ],
//   // },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}