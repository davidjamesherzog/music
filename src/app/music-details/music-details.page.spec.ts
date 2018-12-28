import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailsPage } from './music-details.page';

describe('MusicDetailsPage', () => {
  let component: MusicDetailsPage;
  let fixture: ComponentFixture<MusicDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
