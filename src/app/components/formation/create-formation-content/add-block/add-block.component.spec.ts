import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlockComponent } from './add-element-summary-view.component';

describe('AddBlockComponent', () => {
  let component: AddBlockComponent;
  let fixture: ComponentFixture<AddBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
