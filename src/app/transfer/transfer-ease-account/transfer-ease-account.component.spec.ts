import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEaseAccountComponent } from './transfer-ease-account.component';

describe('TransferEaseAccountComponent', () => {
  let component: TransferEaseAccountComponent;
  let fixture: ComponentFixture<TransferEaseAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferEaseAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEaseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
