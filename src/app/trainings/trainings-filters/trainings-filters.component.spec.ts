import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsFiltersComponent } from './trainings-filters.component';

describe('TrainingsFiltersComponent', () => {
  let component: TrainingsFiltersComponent;
  let fixture: ComponentFixture<TrainingsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
