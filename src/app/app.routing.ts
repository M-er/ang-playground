import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  { path: '**', component: NotFoundComponent },
  { path: './contact', component: ContactComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
