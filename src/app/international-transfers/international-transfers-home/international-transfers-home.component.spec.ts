import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTransfersHomeComponent } from './international-transfers-home.component';

describe('InternationalTransfersHomeComponent', () => {
  let component: InternationalTransfersHomeComponent;
  let fixture: ComponentFixture<InternationalTransfersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalTransfersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalTransfersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
