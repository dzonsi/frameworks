import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserRemoveComponent } from './inser-remove.component';

describe('InserRemoveComponent', () => {
  let component: InserRemoveComponent;
  let fixture: ComponentFixture<InserRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
