import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModbusRoutingModule } from './modbus-routing.module';
import { ModbusComponent } from './modbus.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModbusRoutingModule
  ],
  declarations: [ModbusComponent]
})
export class ModbusModule { }
