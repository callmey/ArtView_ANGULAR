import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create3Component } from './create3.component';

describe('Create3Component', () => {
  let component: Create3Component;
  let fixture: ComponentFixture<Create3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
