import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistFinderHeaderComponent } from './specialist-finder-header.component';

describe('SpecialistFinderHeaderComponent', () => {
  let component: SpecialistFinderHeaderComponent;
  let fixture: ComponentFixture<SpecialistFinderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistFinderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistFinderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
