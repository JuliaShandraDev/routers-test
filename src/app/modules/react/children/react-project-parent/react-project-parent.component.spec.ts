import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactProjectParentComponent } from './react-project-parent.component';

describe('ReactProjectParentComponent', () => {
  let component: ReactProjectParentComponent;
  let fixture: ComponentFixture<ReactProjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactProjectParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactProjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
