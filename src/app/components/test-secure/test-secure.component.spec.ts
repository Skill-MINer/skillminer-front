import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSecureComponent } from './test-secure.component';

describe('TestSecureComponent', () => {
  let component: TestSecureComponent;
  let fixture: ComponentFixture<TestSecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSecureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
