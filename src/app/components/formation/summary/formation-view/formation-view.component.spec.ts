import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationViewComponent } from './formation-view.component';

describe('FormationViewComponent', () => {
  let component: FormationViewComponent;
  let fixture: ComponentFixture<FormationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
