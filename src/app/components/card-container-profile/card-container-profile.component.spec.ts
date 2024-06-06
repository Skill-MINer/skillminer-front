import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerProfileComponent } from './card-container-profile.component';

describe('CardContainerProfileComponent', () => {
  let component: CardContainerProfileComponent;
  let fixture: ComponentFixture<CardContainerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContainerProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardContainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
