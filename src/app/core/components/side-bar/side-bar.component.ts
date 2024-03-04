import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ClientService } from '../../services/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  subscription!: Subscription;

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
    this.subscription = this.clientService.flagMenuObservableBehavior.subscribe(resp => {
      this.sidenav?.toggle(resp);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.screen.width <= 768) {
      this.clientService.flagMenuSubjectSetData = false;
    } else {
      this.sidenav?.toggle(true);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
