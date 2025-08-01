import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormComponent } from './select-form';

describe('SelectForm', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
