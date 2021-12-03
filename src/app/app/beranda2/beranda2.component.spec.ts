import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beranda2Component } from './beranda2.component';

describe('Beranda2Component', () => {
  let component: Beranda2Component;
  let fixture: ComponentFixture<Beranda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Beranda2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Beranda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
