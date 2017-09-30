import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfacesRoutingModule } from './interfaces-routing.module';
import { InterfacesComponent } from './interfaces.component';

@NgModule({
  imports: [
    CommonModule,
    InterfacesRoutingModule
  ],
  declarations: [InterfacesComponent]
})
export class InterfacesModule { }
