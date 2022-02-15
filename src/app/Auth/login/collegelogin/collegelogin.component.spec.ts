import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeloginComponent } from './collegelogin.component';

describe('CollegeloginComponent', () => {
  let component: CollegeloginComponent;
  let fixture: ComponentFixture<CollegeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
