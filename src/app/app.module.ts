import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import { MaterialModule } from "./material-modules";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LearningRoutingModule } from "./app-routing";
import { ModulesPaginationService } from "./shared/subject/module-pagination.subject";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, LearningRoutingModule, HttpClientModule
  ],
  providers: [ModulesPaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
