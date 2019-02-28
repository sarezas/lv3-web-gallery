import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyExComponent } from './baby-ex.component';

describe('BabyExComponent', () => {
  let component: BabyExComponent;
  let fixture: ComponentFixture<BabyExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
