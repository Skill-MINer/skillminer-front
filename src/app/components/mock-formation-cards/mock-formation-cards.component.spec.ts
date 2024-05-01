import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockFormationCardsComponent } from './mock-formation-cards.component';

describe('MockFormationCardsComponent', () => {
  let component: MockFormationCardsComponent;
  let fixture: ComponentFixture<MockFormationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockFormationCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockFormationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
