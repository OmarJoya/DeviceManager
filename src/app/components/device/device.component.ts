import { Component } from '@angular/core';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html'
})

export class DeviceComponent {
    device: Device = {
        id: "1234",
        image: "https://i.gadgets360cdn.com/products/large/1519585124_635_samsung_galaxy_s9_blue.jpg",
        maker: "Samsung",
        model: "S9",
        specs: `Dimensions: 147.7 x 68.7 x 8.5 mm.
                CPU: Snapdragon 845 / Exynos 9810.
                RAM: 4GB.
                Camera: 12MP rear, 8MP front.
                Storage: 64GB.`
    }
}

interface Device {
    id: string,
    image: string,
    model: string,
    maker: string,
    specs: string
}