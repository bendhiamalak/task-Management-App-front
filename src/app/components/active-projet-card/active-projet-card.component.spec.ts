import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjetCardComponent } from './active-projet-card.component';

describe('ActiveProjetCardComponent', () => {
  let component: ActiveProjetCardComponent;
  let fixture: ComponentFixture<ActiveProjetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveProjetCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveProjetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
