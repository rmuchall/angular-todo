import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTodoComponent } from './public-todo.component';

describe('PublicTodoComponent', () => {
  let component: PublicTodoComponent;
  let fixture: ComponentFixture<PublicTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
