import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients$!: Observable<Client[] >;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.clientService.getClients().subscribe({
      next:(resp)=> {
        this.clientService.clientSubjectSetData = resp
        this.clients$ = this.clientService.clientObservableBehavior 
      }
    })

  }

}
