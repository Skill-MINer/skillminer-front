import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSummaryFormationComponent } from './create-summary-formation.component';

describe('CreateSummaryFormationComponent', () => {
  let component: CreateSummaryFormationComponent;
  let fixture: ComponentFixture<CreateSummaryFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSummaryFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSummaryFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
