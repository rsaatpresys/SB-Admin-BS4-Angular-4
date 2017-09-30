import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WifiRoutingModule } from './wifi-routing.module';
import { WifiComponent } from './wifi.component';

@NgModule({
  imports: [
    CommonModule,
    WifiRoutingModule
  ],
  declarations: [WifiComponent]
})
export class WifiModule { }
