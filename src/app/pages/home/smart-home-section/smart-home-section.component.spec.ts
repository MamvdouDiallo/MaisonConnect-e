import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomeSectionComponent } from './smart-home-section.component';

describe('SmartHomeSectionComponent', () => {
  let component: SmartHomeSectionComponent;
  let fixture: ComponentFixture<SmartHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartHomeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
