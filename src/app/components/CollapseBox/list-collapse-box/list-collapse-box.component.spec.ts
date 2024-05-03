import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollapseBoxComponent } from './list-collapse-box.component';

describe('ListCollapseBoxComponent', () => {
  let component: ListCollapseBoxComponent;
  let fixture: ComponentFixture<ListCollapseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCollapseBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCollapseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
