import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { SerchKeyComponent } from './components/serch-key/serch-key.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ClientsComponent,
    ClientListComponent,
    SerchKeyComponent,
    ClientFormComponent
  ],
  imports: [
    SharedModule,
    ClientsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ClientsModule { }
