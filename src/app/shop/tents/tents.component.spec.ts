import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentsComponent } from './tents.component';

describe('TentsComponent', () => {
  let component: TentsComponent;
  let fixture: ComponentFixture<TentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
