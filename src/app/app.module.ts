import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CustomTattoosComponent } from './services/custom-tattoos/custom-tattoos.component';
import { ChineseMedicineComponent } from './services/chinese-medicine/chinese-medicine.component';
import { CosmeticTattoosComponent } from './services/cosmetic-tattoos/cosmetic-tattoos.component';
import { TitlebarComponent } from './header/titlebar/titlebar.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    CustomTattoosComponent,
    ChineseMedicineComponent,
    CosmeticTattoosComponent,
    TitlebarComponent,
    NavigationComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
