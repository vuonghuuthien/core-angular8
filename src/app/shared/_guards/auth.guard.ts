import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
        if (localStorage.getItem('jwtToken')) {
            return true; // user logged in.
        }
        // User is not logged in.
        // Open page login
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}