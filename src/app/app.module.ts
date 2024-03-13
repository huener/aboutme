import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConstructionComponent } from './construction/construction.component';
import { ResumeComponent } from './resume/resume.component'
import { LuigiTimeComponent } from "./luigi-time/luigi-time.component";

@NgModule({
    declarations: [
        AppComponent,
        ResumeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ConstructionComponent,
        LuigiTimeComponent
    ]
})
export class AppModule { }
