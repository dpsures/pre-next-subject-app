import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
 } from "@angular/material";

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
