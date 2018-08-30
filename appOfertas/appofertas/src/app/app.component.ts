import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private user: SocialUser;
  private loggedIn: boolean;
  title = 'AppOfertas';

  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        console.log('Esta logueado');
        console.log(user.name);
      } else {
        console.log('No esta logueado');
      }
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
}

