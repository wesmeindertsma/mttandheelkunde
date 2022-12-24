import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaryntheSectionComponent } from './marynthe-section.component';

describe('MaryntheSectionComponent', () => {
  let component: MaryntheSectionComponent;
  let fixture: ComponentFixture<MaryntheSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaryntheSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaryntheSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
