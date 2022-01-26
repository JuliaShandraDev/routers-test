import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrameworksComponent } from './view-frameworks.component';

describe('ViewFrameworksComponent', () => {
  let component: ViewFrameworksComponent;
  let fixture: ComponentFixture<ViewFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFrameworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
