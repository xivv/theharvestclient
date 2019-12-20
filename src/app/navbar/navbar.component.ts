import { Component } from '@angular/core';
import { Container } from '../model/container';
import { CommunicationService } from '../communication/communication.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(public communicationService: CommunicationService) {

    }
}
