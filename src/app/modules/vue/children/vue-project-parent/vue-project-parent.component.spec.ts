import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjectParentComponent } from './vue-project-parent.component';

describe('VueProjectParentComponent', () => {
  let component: VueProjectParentComponent;
  let fixture: ComponentFixture<VueProjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueProjectParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
