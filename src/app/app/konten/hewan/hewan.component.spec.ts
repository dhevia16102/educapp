import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HewanComponent } from './hewan.component';

describe('HewanComponent', () => {
  let component: HewanComponent;
  let fixture: ComponentFixture<HewanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HewanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HewanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
