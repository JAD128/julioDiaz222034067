import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from './modules/sidetop/views/sidetop-page/sidetop-page.component';

export const routes: Routes = [

    {
        path: '' ,
        component : HomePageComponent
        //Localhost 4200 cuando son comillas sencillas
    },
    {
        path: 'miejemplo', // Muesta la pagina de autenticación
        component : AuthPageComponent
    },
    {
        path : 'sidebar', // Sidebar
        component : SidebarPageComponent
    }
];
