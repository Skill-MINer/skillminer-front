import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryEditComponent } from './summary-edit.component';

describe('SummaryEditComponent', () => {
  let component: SummaryEditComponent;
  let fixture: ComponentFixture<SummaryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
