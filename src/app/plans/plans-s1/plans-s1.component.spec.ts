import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansS1Component } from './plans-s1.component';

describe('PlansS1Component', () => {
  let component: PlansS1Component;
  let fixture: ComponentFixture<PlansS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
