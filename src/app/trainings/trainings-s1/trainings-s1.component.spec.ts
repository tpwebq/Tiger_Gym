import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsS1Component } from './trainings-s1.component';

describe('TrainingsS1Component', () => {
  let component: TrainingsS1Component;
  let fixture: ComponentFixture<TrainingsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
