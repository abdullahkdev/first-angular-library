import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLibComponent } from './email-lib.component';

describe('EmailLibComponent', () => {
  let component: EmailLibComponent;
  let fixture: ComponentFixture<EmailLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
