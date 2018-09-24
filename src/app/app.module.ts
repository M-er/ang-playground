import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule ,
    MatSnackBar
} from '@angular/material';

import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    SidebarComponent,
    LoginComponent
    ],
    imports: [
    FormsModule,
    appRouting,
    DashboardModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
        ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
