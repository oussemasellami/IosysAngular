import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormappartmentComponent } from './formappartment.component';

describe('FormappartmentComponent', () => {
  let component: FormappartmentComponent;
  let fixture: ComponentFixture<FormappartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormappartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormappartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
