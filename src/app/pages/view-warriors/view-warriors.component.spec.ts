import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWarriorsComponent } from './view-warriors.component';

describe('ViewWarriorsComponent', () => {
  let component: ViewWarriorsComponent;
  let fixture: ComponentFixture<ViewWarriorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWarriorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewWarriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
