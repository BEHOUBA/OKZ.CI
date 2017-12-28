import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSettingsComponent } from './results-settings.component';

describe('ResultsSettingsComponent', () => {
  let component: ResultsSettingsComponent;
  let fixture: ComponentFixture<ResultsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
