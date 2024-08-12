import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './shared/app-routing-module';
import { MaterialModule } from './shared/module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    EditUserComponent,
    EditProductComponent,
    PageNotFoundComponent,
    AuthComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
