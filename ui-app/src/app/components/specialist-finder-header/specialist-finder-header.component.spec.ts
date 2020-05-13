import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistFinderHeaderComponent } from './specialist-finder-header.component';
import { SpecialistFinderHeaderModule } from './specialist-finder-header.module';

describe('SpecialistFinderHeaderComponent', () => {
  let component: SpecialistFinderHeaderComponent;
  let fixture: ComponentFixture<SpecialistFinderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SpecialistFinderHeaderModule,
      ],
      declarations: [
        SpecialistFinderHeaderComponent,
      ],
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
