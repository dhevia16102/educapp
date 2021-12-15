import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MewarnaiComponent } from './mewarnai.component';

describe('MewarnaiComponent', () => {
  let component: MewarnaiComponent;
  let fixture: ComponentFixture<MewarnaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MewarnaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MewarnaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
