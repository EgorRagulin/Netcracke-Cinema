import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesPaginatorComponent } from './bubbles-paginator.component';

describe('BubblesPaginatorComponent', () => {
  let component: BubblesPaginatorComponent;
  let fixture: ComponentFixture<BubblesPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblesPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblesPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
