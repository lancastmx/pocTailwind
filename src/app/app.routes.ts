import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
    {
        path: '', component:LoginComponent
    }
];
