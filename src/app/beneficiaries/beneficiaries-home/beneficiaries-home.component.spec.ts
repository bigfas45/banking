import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesHomeComponent } from './beneficiaries-home.component';

describe('BeneficiariesHomeComponent', () => {
  let component: BeneficiariesHomeComponent;
  let fixture: ComponentFixture<BeneficiariesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
