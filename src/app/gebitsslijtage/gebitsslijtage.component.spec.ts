import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GebitsslijtageComponent } from './gebitsslijtage.component';

describe('GebitsslijtageComponent', () => {
  let component: GebitsslijtageComponent;
  let fixture: ComponentFixture<GebitsslijtageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GebitsslijtageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GebitsslijtageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
