import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectParentComponent } from './angular-project-parent.component';

describe('AngularProjectParentComponent', () => {
  let component: AngularProjectParentComponent;
  let fixture: ComponentFixture<AngularProjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularProjectParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
