import { Routes } from '@angular/router';
import { VacationsformComponent } from './vacationsform/vacationsform.component';

export const routes: Routes = [
    {
        path : 'formulario_vacaciones',
        component : VacationsformComponent
    },
    {
        path : '',
        redirectTo : 'formulario_vacaciones',
        pathMatch : 'full'
    }
];
