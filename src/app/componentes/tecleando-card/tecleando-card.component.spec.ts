import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecleandoCardComponent } from './tecleando-card.component';

describe('TecleandoCardComponent', () => {
  let component: TecleandoCardComponent;
  let fixture: ComponentFixture<TecleandoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecleandoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecleandoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
