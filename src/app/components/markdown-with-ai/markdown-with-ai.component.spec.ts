import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownWithAiComponent } from './markdown-with-ai.component';

describe('MarkdownWithAiComponent', () => {
  let component: MarkdownWithAiComponent;
  let fixture: ComponentFixture<MarkdownWithAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownWithAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownWithAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
