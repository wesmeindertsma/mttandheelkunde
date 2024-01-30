import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KroonBrugwerkComponent } from './kroon-brugwerk.component';

describe('KroonBrugwerkComponent', () => {
  let component: KroonBrugwerkComponent;
  let fixture: ComponentFixture<KroonBrugwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KroonBrugwerkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KroonBrugwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
