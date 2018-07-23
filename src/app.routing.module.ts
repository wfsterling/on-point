import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { ServicesComponent } from 'app/services/services.component';
import { GalleryComponent } from 'app/gallery/gallery.component';
import { ContactComponent } from 'app/contact/contact.component';


const routes: Routes = [
    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }