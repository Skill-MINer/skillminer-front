import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSectionsContainerComponent } from './create-sections-container.component';

describe('CreateSectionsContainerComponent', () => {
  let component: CreateSectionsContainerComponent;
  let fixture: ComponentFixture<CreateSectionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSectionsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSectionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
