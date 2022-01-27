import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjectChildComponent } from './vue-project-child.component';

describe('VueProjectChildComponent', () => {
  let component: VueProjectChildComponent;
  let fixture: ComponentFixture<VueProjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueProjectChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
