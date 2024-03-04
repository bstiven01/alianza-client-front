import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../../services/client.service';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    clientService = TestBed.inject(ClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
