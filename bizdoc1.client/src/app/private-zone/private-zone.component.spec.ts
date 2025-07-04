import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateZoneComponent } from './private-zone.component';

describe('PrivateZoneComponent', () => {
  let component: PrivateZoneComponent;
  let fixture: ComponentFixture<PrivateZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
