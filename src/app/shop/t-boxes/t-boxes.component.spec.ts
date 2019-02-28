import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TBoxesComponent } from './t-boxes.component';

describe('TBoxesComponent', () => {
  let component: TBoxesComponent;
  let fixture: ComponentFixture<TBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
