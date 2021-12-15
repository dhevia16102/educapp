import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendaComponent } from './benda.component';

describe('BendaComponent', () => {
  let component: BendaComponent;
  let fixture: ComponentFixture<BendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
