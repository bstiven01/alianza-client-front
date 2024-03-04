import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  flag = true;

  constructor(private clientService: ClientService) { }

  change() {

    if (this.flag) {
      this.clientService.flagMenuSubjectSetData = false;
      this.flag = false;
    } else {
      this.clientService.flagMenuSubjectSetData = true;
      this.flag = true;
    }

  }


}
