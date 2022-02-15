import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeregisterComponent } from './collegeregister.component';

describe('CollegeregisterComponent', () => {
  let component: CollegeregisterComponent;
  let fixture: ComponentFixture<CollegeregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
