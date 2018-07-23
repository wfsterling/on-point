import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

import { TitlebarComponent } from './header/titlebar/titlebar.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app.routing.module';
import { ServicesModule } from './services/services.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    TitlebarComponent,
    NavigationComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
