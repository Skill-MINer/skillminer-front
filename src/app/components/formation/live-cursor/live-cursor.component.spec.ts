import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCursorComponent } from './live-cursor.component';

describe('LiveCursorComponent', () => {
  let component: LiveCursorComponent;
  let fixture: ComponentFixture<LiveCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCursorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
