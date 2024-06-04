import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownViewOnlyComponent } from './markdown-view-only.component';

describe('MarkdownViewOnlyComponent', () => {
  let component: MarkdownViewOnlyComponent;
  let fixture: ComponentFixture<MarkdownViewOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownViewOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownViewOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
