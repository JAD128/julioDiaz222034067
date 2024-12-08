import { Routes } from '@angular/router';
import { VacationsformComponent } from './vacationsform/vacationsform.component';
import { ValidationComponent } from './components/validation/validation.component';

export const routes: Routes = [
    {
        path : 'formulario_vacaciones',
        component : VacationsformComponent
    },
    {
        path : '',
        redirectTo : 'formulario_vacaciones',
        pathMatch : 'full'
    },
    {
        path : 'validacion',
        component : ValidationComponent
    }
];
