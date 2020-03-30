import { Component } from '@angular/core';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html'
})

export class DeviceListComponent {
    deviceList: string[] =["1","2","3", ""]
}