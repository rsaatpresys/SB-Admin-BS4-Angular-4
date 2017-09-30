import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectorComponent } from './connector.component';

const routes: Routes = [
    { path: '', component: ConnectorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConnectorRoutingModule { }
