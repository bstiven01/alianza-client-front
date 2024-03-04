import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchKeyComponent } from './serch-key.component';

describe('SerchKeyComponent', () => {
  let component: SerchKeyComponent;
  let fixture: ComponentFixture<SerchKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
