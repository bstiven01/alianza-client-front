import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../../services/client.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
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

  describe('GIVEN change', () => {
    it('WHEN is call and flag is true THEN flagMenuSubjectSetData is false', () => {
      component.change();
      clientService.flagMenuObservableBehavior.subscribe(resp => {
        expect(resp).toBeFalse();
      });
    });

    it('WHEN is call and flag is false THEN flagMenuSubjectSetData is true', () => {
      component.flag = false;

      component.change();

      clientService.flagMenuObservableBehavior.subscribe(resp => {
        expect(resp).toBeTrue();
      });
    });
  });
});
