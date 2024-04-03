import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeaderFormationComponent } from './create-header-formation.component';

describe('CreateHeaderFormationComponent', () => {
  let component: CreateHeaderFormationComponent;
  let fixture: ComponentFixture<CreateHeaderFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHeaderFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHeaderFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
