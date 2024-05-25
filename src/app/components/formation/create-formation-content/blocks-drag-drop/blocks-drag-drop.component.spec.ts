import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksDragDropComponent } from './blocks-drag-drop.component';

describe('BlocksDragDropComponent', () => {
  let component: BlocksDragDropComponent;
  let fixture: ComponentFixture<BlocksDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksDragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocksDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
