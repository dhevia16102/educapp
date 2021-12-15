import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngkaComponent } from './angka.component';

describe('AngkaComponent', () => {
  let component: AngkaComponent;
  let fixture: ComponentFixture<AngkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
