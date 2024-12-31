import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './app/home/home.component';
import { SneakersListingsComponent } from './app/sneakers-listings/sneakers-listings.component';
import { EditSneakerComponent } from './app/edit-sneaker/edit-sneaker.component';
import { RemoveSneakerComponent } from './app/remove-sneaker/remove-sneaker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sneakers-listings', component: SneakersListingsComponent },
  { path: 'edit-sneaker/:id', component: EditSneakerComponent },
  { path: 'remove-sneaker/:id', component: RemoveSneakerComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
