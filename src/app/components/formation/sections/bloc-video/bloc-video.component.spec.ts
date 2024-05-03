import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocVideoComponent } from './bloc-video.component';

describe('BlocVideoComponent', () => {
  let component: BlocVideoComponent;
  let fixture: ComponentFixture<BlocVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
