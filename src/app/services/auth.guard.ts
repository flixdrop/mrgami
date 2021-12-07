// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private auth: AuthService, private router: Router){}
//   canActivate(){
//     if(this.auth.isLoggedIn()){
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;
//     }
// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
@Injectable({
  providedIn: 'root'
})

export class IsAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }


  async canActivate(): Promise<boolean> {
    if (!await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigateByUrl('/tabs/landing');
    return false;
  }
}
