import { Injectable } from '@angular/core';


/** Modbus service configuration */
@Injectable()
export class ModbusService {


    constructor() { }

   /**
    * Obtém configuração dos parâmetros de serial de modbus
    */
    public getModbusConfig(): void {
            console.log('getModbusConfig')
    }


}
