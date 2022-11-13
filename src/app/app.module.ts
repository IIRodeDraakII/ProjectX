import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './mainBoard/mainBoard-item.component';
import { SocialMediaComponent } from './boardItems/social-media/socialMedia-item.component';
import { NavbarComponent } from './navbar/navbar-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    SocialMediaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
