import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocVideoViewComponent } from './bloc-video-view.component';

describe('BlocVideoViewComponent', () => {
  let component: BlocVideoViewComponent;
  let fixture: ComponentFixture<BlocVideoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocVideoViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocVideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
