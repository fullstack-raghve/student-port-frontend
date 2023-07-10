import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLitsComponent } from './students-lits.component';

describe('StudentsLitsComponent', () => {
  let component: StudentsLitsComponent;
  let fixture: ComponentFixture<StudentsLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsLitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
