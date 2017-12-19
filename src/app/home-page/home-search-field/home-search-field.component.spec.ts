import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchFieldComponent } from './home-search-field.component';

describe('HomeSearchFieldComponent', () => {
  let component: HomeSearchFieldComponent;
  let fixture: ComponentFixture<HomeSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
