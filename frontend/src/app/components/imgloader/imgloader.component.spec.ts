import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgloaderComponent } from './imgloader.component';

describe('ImgloaderComponent', () => {
  let component: ImgloaderComponent;
  let fixture: ComponentFixture<ImgloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
