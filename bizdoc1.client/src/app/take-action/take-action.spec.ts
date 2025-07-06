import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAction } from './take-action';

describe('TakeAction', () => {
  let component: TakeAction;
  let fixture: ComponentFixture<TakeAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
