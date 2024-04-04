import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title1SectionComponent } from './title1-section.component';

describe('Title1SectionComponent', () => {
  let component: Title1SectionComponent;
  let fixture: ComponentFixture<Title1SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Title1SectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Title1SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
