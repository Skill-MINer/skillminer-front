import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDragDropComponent } from './block-drag-drop.component';

describe('BlockDragDropComponent', () => {
  let component: BlockDragDropComponent;
  let fixture: ComponentFixture<BlockDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockDragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
