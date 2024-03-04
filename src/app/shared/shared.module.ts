import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFunctionComponent } from './components/button-function/button-function.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ButtonFunctionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    ButtonFunctionComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
