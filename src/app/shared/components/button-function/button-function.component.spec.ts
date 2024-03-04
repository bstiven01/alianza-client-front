import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFunctionComponent } from './button-function.component';

describe('ButtonFunctionComponent', () => {
  let component: ButtonFunctionComponent;
  let fixture: ComponentFixture<ButtonFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
