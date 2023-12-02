import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLogosComponent } from './banner-logos.component';

describe('BannerLogosComponent', () => {
  let component: BannerLogosComponent;
  let fixture: ComponentFixture<BannerLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerLogosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
