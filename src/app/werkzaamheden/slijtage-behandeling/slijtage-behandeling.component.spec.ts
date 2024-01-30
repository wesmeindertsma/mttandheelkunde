import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlijtageBehandelingComponent } from './slijtage-behandeling.component';

describe('SlijtageBehandelingComponent', () => {
  let component: SlijtageBehandelingComponent;
  let fixture: ComponentFixture<SlijtageBehandelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlijtageBehandelingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlijtageBehandelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
