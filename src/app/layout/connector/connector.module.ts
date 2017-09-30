import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectorRoutingModule } from './connector-routing.module';
import { ConnectorComponent } from './connector.component';

@NgModule({
  imports: [
    CommonModule,
    ConnectorRoutingModule
  ],
  declarations: [ConnectorComponent]
})
export class ConnectorModule { }
