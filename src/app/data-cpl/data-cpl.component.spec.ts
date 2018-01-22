import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCplComponent } from './data-cpl.component';

describe('DataCplComponent', () => {
  let component: DataCplComponent;
  let fixture: ComponentFixture<DataCplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
