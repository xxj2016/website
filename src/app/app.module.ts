import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { CaseComponent } from './case/case.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { SanetCaseComponent } from './sanet-case/sanet-case.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ServiceComponent,
        CaseComponent,
        ContactComponent,
        CustomerComponent,
        MapComponent,
        SanetCaseComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
