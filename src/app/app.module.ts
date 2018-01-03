import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ValueComponent } from './value/value.component';
import { AdmissionComponent } from './admission/admission.component';
import { ActivityComponent } from './activity/activity.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CourseComponent,
        ValueComponent,
        AdmissionComponent,
        ActivityComponent,
        MapComponent,
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
