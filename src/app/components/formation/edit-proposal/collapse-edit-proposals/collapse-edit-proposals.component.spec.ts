import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseEditProposalsComponent } from './collapse-edit-proposals.component';

describe('CollapseEditProposalsComponent', () => {
  let component: CollapseEditProposalsComponent;
  let fixture: ComponentFixture<CollapseEditProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseEditProposalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapseEditProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
