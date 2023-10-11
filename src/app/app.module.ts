import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';

// angular material imports
import { MaterialModule } from './modules/material/material.module';

// components
import { CardComponent } from './modules/shared/components/card/card.component';
import { RecordGeneratorComponent } from './modules/home/funcionalidades/record-generator/record-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    RecordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
