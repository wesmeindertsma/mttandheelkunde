import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlekenComponent } from './bleken.component';

describe('BlekenComponent', () => {
  let component: BlekenComponent;
  let fixture: ComponentFixture<BlekenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlekenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
