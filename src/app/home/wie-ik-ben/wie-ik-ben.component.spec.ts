import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieIkBenComponent } from './wie-ik-ben.component';

describe('WieIkBenComponent', () => {
  let component: WieIkBenComponent;
  let fixture: ComponentFixture<WieIkBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WieIkBenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WieIkBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
