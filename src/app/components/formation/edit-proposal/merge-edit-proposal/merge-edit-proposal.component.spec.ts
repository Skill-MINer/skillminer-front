import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeEditProposalComponent } from './merge-edit-proposal.component';

describe('MergeEditProposalComponent', () => {
  let component: MergeEditProposalComponent;
  let fixture: ComponentFixture<MergeEditProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeEditProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeEditProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
