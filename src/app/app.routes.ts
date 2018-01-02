import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SanetCaseComponent } from './sanet-case/sanet-case.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'sanet-case',
        component: SanetCaseComponent
    },
    {
        path: '**', // fallback router must in the last
        component: HomeComponent
    }
];
