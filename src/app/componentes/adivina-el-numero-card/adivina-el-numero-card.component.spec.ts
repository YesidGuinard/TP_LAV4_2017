import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElNumeroCardComponent } from './adivina-el-numero-card.component';

describe('AdivinaElNumeroCardComponent', () => {
  let component: AdivinaElNumeroCardComponent;
  let fixture: ComponentFixture<AdivinaElNumeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaElNumeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaElNumeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
