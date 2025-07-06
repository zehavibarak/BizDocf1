import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectForm } from './select-form';

describe('SelectForm', () => {
  let component: SelectForm;
  let fixture: ComponentFixture<SelectForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
