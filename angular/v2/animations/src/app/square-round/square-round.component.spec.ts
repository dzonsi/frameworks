import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareRoundComponent } from './square-round.component';

describe('SquareRoundComponent', () => {
  let component: SquareRoundComponent;
  let fixture: ComponentFixture<SquareRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
