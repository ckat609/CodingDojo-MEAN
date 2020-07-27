import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeIndexComponent } from './bike-index.component';

describe('BikeIndexComponent', () => {
  let component: BikeIndexComponent;
  let fixture: ComponentFixture<BikeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
