import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMapComponent } from './main-map.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainMapComponent', () => {
  let component: MainMapComponent;
  let fixture: ComponentFixture<MainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMapComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a marker for each destination', () => {
    expect(component.markers.length).toEqual(7);
  });
});
