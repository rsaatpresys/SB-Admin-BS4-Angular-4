import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModbusService } from './modbus.service';

@Component({
    selector: 'app-modbus',
    templateUrl: './modbus.component.html',
    styleUrls: ['./modbus.component.scss']
})
export class ModbusComponent implements OnInit {

    modbuForm: FormGroup;
    testModbuForm: FormGroup;

    constructor(private fb: FormBuilder, private modbusService: ModbusService) {

        this.modbuForm = fb.group({
            'comPort': ['', [Validators.required, Validators.minLength(3)]],
            'comPortTimeOut': ['', [Validators.required]],
            'modbusTcpPort': ['', [Validators.required]]
        });

        this.testModbuForm = fb.group({
            'modbusSlave': ['1', [Validators.required]]
        });
    }

    private saveModbus(post) {


        let errors: string;

        errors = '';

        if (!this.modbuForm.controls['comPort'].valid) {
            errors += 'Com Port Invalid' + '\n';
            errors += 'Com Port Invalid';
        }

        if (!this.modbuForm.valid) {
            this.showSaveStatus(errors);
            return;
        }

        console.log('post.comPort:' + post.comPort);
        console.log('post.comPortTimeOut:' + post.comPortTimeOut);
        console.log('post.modbusTcpPort:' + post.modbusTcpPort);

        this.showSaveStatus('Save Ok');

    }


    cancelModbus() {

        this.showSaveStatus('');
        this.loadForm();

    }



    testStatus: string;
    testModbus(post) {

        console.log('valid post.modbusSlave:' + post.modbusSlave);
        this.testStatus = 'TestOk'

    }

    alertMessage: string;
    showSaveStatus(message: string) {
        this.alertMessage = message;

    }


    ngOnInit() {
        this.loadForm();
    }

    loadForm() {

        // load data from web service

        this.modbusService.getModbusConfig();

        this.modbuForm.patchValue({
            comPort: 'xxx',
            comPortTimeOut: 'zzz',
            modbusTcpPort: '503'
        });

    }

}
