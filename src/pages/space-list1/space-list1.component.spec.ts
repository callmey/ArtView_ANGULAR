import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceList1Component } from './space-list1.component';

describe('SpaceList1Component', () => {
  let component: SpaceList1Component;
  let fixture: ComponentFixture<SpaceList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
