import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFiltersComponent } from './plans-filters.component';

describe('PlansFiltersComponent', () => {
  let component: PlansFiltersComponent;
  let fixture: ComponentFixture<PlansFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
