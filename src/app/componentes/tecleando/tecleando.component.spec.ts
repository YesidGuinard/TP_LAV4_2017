import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecleandoComponent } from './tecleando.component';

describe('TecleandoComponent', () => {
  let component: TecleandoComponent;
  let fixture: ComponentFixture<TecleandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecleandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecleandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
