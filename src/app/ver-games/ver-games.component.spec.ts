import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGamesComponent } from './ver-games.component';

describe('VerGamesComponent', () => {
  let component: VerGamesComponent;
  let fixture: ComponentFixture<VerGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
