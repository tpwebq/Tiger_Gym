import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsS2Component } from './trainings-s2.component';

describe('TrainingsS2Component', () => {
  let component: TrainingsS2Component;
  let fixture: ComponentFixture<TrainingsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
