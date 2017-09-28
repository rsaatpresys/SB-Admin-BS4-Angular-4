import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModbusComponent } from './modbus.component';

const routes: Routes = [
    { path: '', component: ModbusComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModbusRoutingModule { }
