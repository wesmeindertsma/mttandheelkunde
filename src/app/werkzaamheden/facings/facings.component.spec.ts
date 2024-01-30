import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacingsComponent } from './facings.component';

describe('FacingsComponent', () => {
  let component: FacingsComponent;
  let fixture: ComponentFixture<FacingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
