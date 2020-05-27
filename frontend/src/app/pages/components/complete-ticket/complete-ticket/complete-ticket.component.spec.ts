import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTicketComponent } from './complete-ticket.component';

describe('CompleteTicketComponent', () => {
  let component: CompleteTicketComponent;
  let fixture: ComponentFixture<CompleteTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
