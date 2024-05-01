import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitleOrTextComponent } from './add-title-or-text.component';

describe('AddTitleOrTextComponent', () => {
  let component: AddTitleOrTextComponent;
  let fixture: ComponentFixture<AddTitleOrTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTitleOrTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTitleOrTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
