import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarCreateComponent } from './components/car-create/car-create.component';
// import { CompoComponent } from './components/compo.component';

const routes: Routes = [
  // { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path:'login', component:LoginComponent}



  // { path: 'signup', component: SignupComponent },
  // { path: 'cars', component: CarListComponent },
  // { path: 'car/:id', component: CarDetailComponent },
  // { path: 'car-create', component: CarCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class carRoutingModule {}
