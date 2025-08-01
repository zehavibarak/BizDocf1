import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderComponent } from './folder.component';

describe('DocumentFolderComponent', () => {
  let component: FolderComponent;
  let fixture: ComponentFixture<FolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
