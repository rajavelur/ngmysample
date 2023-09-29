import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentitemComponent } from './studentitem.component';

describe('StudentitemComponent', () => {
  let component: StudentitemComponent;
  let fixture: ComponentFixture<StudentitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
