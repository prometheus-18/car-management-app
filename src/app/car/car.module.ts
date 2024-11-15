import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './car-routing.module';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
// import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { carRoutingModule } from './car-routing.module';


@NgModule({
  declarations: [
    // LoginComponent,
    SignupComponent,
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent
  ],
  imports: [
    carRoutingModule,
    CommonModule,
    // AppRoutingModule,
    FormsModule,  // Add FormsModule here
    HttpClientModule,
    ReactiveFormsModule 
    
  ]
})

export class CarModule { }