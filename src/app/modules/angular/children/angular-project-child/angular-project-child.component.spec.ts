import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectChildComponent } from './angular-project-child.component';

describe('AngularProjectChildComponent', () => {
  let component: AngularProjectChildComponent;
  let fixture: ComponentFixture<AngularProjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularProjectChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
