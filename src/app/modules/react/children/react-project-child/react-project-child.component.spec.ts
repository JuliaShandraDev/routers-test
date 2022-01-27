import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactProjectChildComponent } from './react-project-child.component';

describe('ReactProjectChildComponent', () => {
  let component: ReactProjectChildComponent;
  let fixture: ComponentFixture<ReactProjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactProjectChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactProjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
