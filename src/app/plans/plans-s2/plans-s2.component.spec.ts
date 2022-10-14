import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansS2Component } from './plans-s2.component';

describe('PlansS2Component', () => {
  let component: PlansS2Component;
  let fixture: ComponentFixture<PlansS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
