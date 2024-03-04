import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
  ) { }

  ngOnInit(): void {

    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      phone: ['', [Validators.required], Validators.pattern('[- +()0-9]+')],
      email: ['', [Validators.required, Validators.email]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]]
    });

  }

  createClient() {
    this.dialogRef.close(this.clientForm.value);
  }

}
