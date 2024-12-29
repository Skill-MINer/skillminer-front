import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementSummaryComponent } from './add-element-summary.component';

describe('AddElementSummaryComponent', () => {
  let component: AddElementSummaryComponent;
  let fixture: ComponentFixture<AddElementSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElementSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddElementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
