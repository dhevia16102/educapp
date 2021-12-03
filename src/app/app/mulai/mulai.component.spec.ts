import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulaiComponent } from './mulai.component';

describe('MulaiComponent', () => {
  let component: MulaiComponent;
  let fixture: ComponentFixture<MulaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
