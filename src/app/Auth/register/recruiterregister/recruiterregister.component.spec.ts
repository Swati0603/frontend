import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterregisterComponent } from './recruiterregister.component';

describe('RecruiterregisterComponent', () => {
  let component: RecruiterregisterComponent;
  let fixture: ComponentFixture<RecruiterregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
