import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModbusRoutingModule } from './modbus-routing.module';
import { ModbusComponent } from './modbus.component';

@NgModule({
  imports: [
    CommonModule,
    ModbusRoutingModule
  ],
  declarations: [ModbusComponent]
})
export class ModbusModule { }
