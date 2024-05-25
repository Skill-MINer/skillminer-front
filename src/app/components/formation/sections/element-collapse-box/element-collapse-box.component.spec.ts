import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCollapseBoxComponent } from './element-collapse-box.component';

describe('ElementCollapseBoxComponent', () => {
  let component: ElementCollapseBoxComponent;
  let fixture: ComponentFixture<ElementCollapseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementCollapseBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementCollapseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
