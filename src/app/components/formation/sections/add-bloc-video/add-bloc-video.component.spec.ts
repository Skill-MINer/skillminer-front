import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlocVideoComponent } from './add-bloc-video.component';

describe('AddBlocVideoComponent', () => {
  let component: AddBlocVideoComponent;
  let fixture: ComponentFixture<AddBlocVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBlocVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBlocVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
