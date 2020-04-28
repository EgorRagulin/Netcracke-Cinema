import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblePageComponent } from './bubble-page.component';

describe('BubblePageComponent', () => {
  let component: BubblePageComponent;
  let fixture: ComponentFixture<BubblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
