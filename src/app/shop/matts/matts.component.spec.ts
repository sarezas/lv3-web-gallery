import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattsComponent } from './matts.component';

describe('MattsComponent', () => {
  let component: MattsComponent;
  let fixture: ComponentFixture<MattsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
