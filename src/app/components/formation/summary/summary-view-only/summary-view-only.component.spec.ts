import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryViewOnlyComponent } from './summary-view-only.component';

describe('SummaryViewOnlyComponent', () => {
  let component: SummaryViewOnlyComponent;
  let fixture: ComponentFixture<SummaryViewOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryViewOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryViewOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
