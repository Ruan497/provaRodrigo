import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGameComponent } from './criar-game.component';

describe('CriarGameComponent', () => {
  let component: CriarGameComponent;
  let fixture: ComponentFixture<CriarGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
