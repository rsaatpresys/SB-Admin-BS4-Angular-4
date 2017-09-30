import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfacesComponent } from './interfaces.component';

const routes: Routes = [
    { path: '', component: InterfacesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfacesRoutingModule { }
