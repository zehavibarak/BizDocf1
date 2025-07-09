import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeActionComponent } from './take-action';

describe('TakeAction', () => {
  let component: TakeActionComponent;
  let fixture: ComponentFixture<TakeActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
