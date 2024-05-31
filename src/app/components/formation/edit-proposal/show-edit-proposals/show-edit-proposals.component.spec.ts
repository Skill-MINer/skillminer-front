import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditProposalsComponent } from './show-edit-proposals.component';

describe('ShowEditProposalsComponent', () => {
  let component: ShowEditProposalsComponent;
  let fixture: ComponentFixture<ShowEditProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEditProposalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEditProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
