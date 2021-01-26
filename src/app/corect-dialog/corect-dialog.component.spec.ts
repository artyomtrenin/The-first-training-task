import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorectDialogComponent } from './corect-dialog.component';

describe('CorectDialogComponent', () => {
  let component: CorectDialogComponent;
  let fixture: ComponentFixture<CorectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
