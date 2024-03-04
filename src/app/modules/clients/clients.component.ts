import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  showFormFilter!: boolean;
  clientsBackup!: Client[];

  constructor(public dialog: MatDialog, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClientFormComponent, {
      width: '',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (Boolean(result)) {
        this.clientService.updateClient(result).subscribe({
          next: (resp) => {
            this.clientService.clientSubjectSetData = resp;
          }
        });
      }

    });
  }

  filterSearch(shared_key: string): boolean {

    if (!Boolean(this.clientsBackup)) {
      this.clientsBackup = this.clientService.clientObservableValues;
    }

    let clients = this.clientsBackup.filter(va => va.shared_key.includes(shared_key));

    this.clientService.clientSubjectSetData = clients

    if (!Boolean(shared_key)) {
      this.clientService.clientSubjectSetData = this.clientsBackup;
      return false
    }

    return true;
  }

}
