import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelTijeraCardComponent } from './piedra-papel-tijera-card.component';

describe('PiedraPapelTijeraCardComponent', () => {
  let component: PiedraPapelTijeraCardComponent;
  let fixture: ComponentFixture<PiedraPapelTijeraCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTijeraCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelTijeraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
