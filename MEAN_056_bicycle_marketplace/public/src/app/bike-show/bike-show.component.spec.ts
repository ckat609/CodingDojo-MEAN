import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeShowComponent } from './bike-show.component';

describe('BikeShowComponent', () => {
  let component: BikeShowComponent;
  let fixture: ComponentFixture<BikeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
