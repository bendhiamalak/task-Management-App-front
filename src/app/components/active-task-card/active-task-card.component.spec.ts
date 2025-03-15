import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTaskCardComponent } from './active-task-card.component';

describe('ActiveTaskCardComponent', () => {
  let component: ActiveTaskCardComponent;
  let fixture: ComponentFixture<ActiveTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveTaskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
