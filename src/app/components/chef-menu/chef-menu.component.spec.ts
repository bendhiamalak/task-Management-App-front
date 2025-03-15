import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefMenuComponent } from './chef-menu.component';

describe('ChefMenuComponent', () => {
  let component: ChefMenuComponent;
  let fixture: ComponentFixture<ChefMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
