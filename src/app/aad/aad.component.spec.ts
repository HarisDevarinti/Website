import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadComponent } from './aad.component';

describe('AadComponent', () => {
  let component: AadComponent;
  let fixture: ComponentFixture<AadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AadComponent]
    });
    fixture = TestBed.createComponent(AadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
