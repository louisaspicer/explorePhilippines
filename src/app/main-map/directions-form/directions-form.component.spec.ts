import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsFormComponent } from './directions-form.component';
import { Marker } from '../../../models/marker';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

describe('DirectionsFormComponent', () => {
  let component: DirectionsFormComponent;
  let fixture: ComponentFixture<DirectionsFormComponent>;
  let startingPointElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AgmCoreModule.forRoot() ],
      declarations: [ DirectionsFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsFormComponent);
    component = fixture.componentInstance;
    component.startingPointName = 'Manila';
    component.latitude = 1234;
    component.longitude = 5678;
    startingPointElement = fixture.debugElement.query(By.css('.starting-point-form'));

    fixture.detectChanges();
  });

  it('should expose new marker on submit', () => {
    let newMarker: Marker;
    component.onAddMarker.subscribe((marker: Marker) => {
      newMarker = marker;
    });

    const expectedMarker: Marker = {
      name: 'Manila',
      lat: 1234,
      lng: 5678,
      draggable: true,
      isSelected: false
    };
    startingPointElement.triggerEventHandler('submit', expectedMarker);

    expect(newMarker).toEqual(expectedMarker);
  });
});
