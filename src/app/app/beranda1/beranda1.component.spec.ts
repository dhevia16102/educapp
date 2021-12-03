import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beranda1Component } from './beranda1.component';

describe('Beranda1Component', () => {
  let component: Beranda1Component;
  let fixture: ComponentFixture<Beranda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Beranda1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Beranda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
