import { Routes } from '@angular/router';
import { LoginComponent } from './car/components/login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent}
    // {
    //     path: '',
    //     redirectTo: 'auth',
    //     pathMatch: 'full',
    // },
    // {
    //     path: 'auth',
    //     loadChildren: () =>
    //         import('./car/car.module').then((m) => m.CarModule)
    // }
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         import('./car/car.module').then((m) => m.CarModule),
    // },
];
