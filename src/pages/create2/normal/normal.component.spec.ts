import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomalComponent } from './normal.component';

describe('Create2Component', () => {
  let component: NomalComponent;
  let fixture: ComponentFixture<NomalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
