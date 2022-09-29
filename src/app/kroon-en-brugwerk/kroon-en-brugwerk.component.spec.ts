import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KroonEnBrugwerkComponent } from './kroon-en-brugwerk.component';

describe('KroonEnBrugwerkComponent', () => {
  let component: KroonEnBrugwerkComponent;
  let fixture: ComponentFixture<KroonEnBrugwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KroonEnBrugwerkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KroonEnBrugwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
