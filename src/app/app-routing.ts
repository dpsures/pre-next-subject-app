import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from "./material-modules";
import { FlexLayoutModule } from "@angular/flex-layout";

import { LandingComponent } from "./landing/landing.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { ModulesComponent } from "./modules/modules.component";
import { ModuleDetailsComponent } from "./module-details/module-details.component";
import { CoursesComponent } from "./courses/courses.component";

import { CoursesService } from "./courses/courses.service";
import { ModuleService } from "./modules/modules.service";

import { ModulesPaginationService } from "./shared/subject/module-pagination.subject";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/learning', pathMatch: 'full'},
  { path: 'learning', component: LandingComponent, children:[
        {path:'', redirectTo: '/dashboard', pathMatch: 'full'}   ,
        {path:'dashboard', component: DashboardComponent},
        {path: 'courses', component: ModuleDetailsComponent}
  ]}
];

@NgModule({
  imports: [CommonModule,MaterialModule, FlexLayoutModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  declarations: [LandingComponent, DashboardComponent, HeaderComponent, ModulesComponent, ModuleDetailsComponent,CoursesComponent],
  providers: [CoursesService, ModulesPaginationService, ModuleService]
})
export class LearningRoutingModule { }