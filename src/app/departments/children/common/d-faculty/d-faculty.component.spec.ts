import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFacultyComponent } from './d-faculty.component';

describe('DFacultyComponent', () => {
  let component: DFacultyComponent;
  let fixture: ComponentFixture<DFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
