import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAdsComponent } from './featured-ads.component';

describe('FeaturedAdsComponent', () => {
  let component: FeaturedAdsComponent;
  let fixture: ComponentFixture<FeaturedAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
