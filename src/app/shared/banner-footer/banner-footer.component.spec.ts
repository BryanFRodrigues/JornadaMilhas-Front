import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFooterComponent } from './banner-footer.component';

describe('BannerFooterComponent', () => {
  let component: BannerFooterComponent;
  let fixture: ComponentFixture<BannerFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerFooterComponent]
    });
    fixture = TestBed.createComponent(BannerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
