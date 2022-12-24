import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatIkDoeComponent } from './wat-ik-doe.component';

describe('WatIkDoeComponent', () => {
  let component: WatIkDoeComponent;
  let fixture: ComponentFixture<WatIkDoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatIkDoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatIkDoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
