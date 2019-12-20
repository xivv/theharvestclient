import { Component } from '@angular/core';
import { CommunicationService } from './communication/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harvestclient';

  command: string;

  constructor(private communicationService: CommunicationService) {
  }

  parseCommand() {
    this.communicationService.communicate(this.command);
    this.command = '';
  }


}
