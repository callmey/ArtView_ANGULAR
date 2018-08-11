import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaverSpaceComponent } from './naver-space.component';

describe('NaverSpaceComponent', () => {
  let component: NaverSpaceComponent;
  let fixture: ComponentFixture<NaverSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaverSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaverSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
