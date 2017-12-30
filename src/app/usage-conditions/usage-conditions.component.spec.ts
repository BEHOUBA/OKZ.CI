import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageConditionsComponent } from './usage-conditions.component';

describe('UsageConditionsComponent', () => {
  let component: UsageConditionsComponent;
  let fixture: ComponentFixture<UsageConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
