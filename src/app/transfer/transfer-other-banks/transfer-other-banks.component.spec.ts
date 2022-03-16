import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOtherBanksComponent } from './transfer-other-banks.component';

describe('TransferOtherBanksComponent', () => {
  let component: TransferOtherBanksComponent;
  let fixture: ComponentFixture<TransferOtherBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferOtherBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOtherBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
