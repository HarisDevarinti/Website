import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaacComponent } from './baac.component';

describe('BaacComponent', () => {
  let component: BaacComponent;
  let fixture: ComponentFixture<BaacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaacComponent]
    });
    fixture = TestBed.createComponent(BaacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
