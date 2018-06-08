import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create4Component } from './create4.component';

describe('Create4Component', () => {
  let component: Create4Component;
  let fixture: ComponentFixture<Create4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
