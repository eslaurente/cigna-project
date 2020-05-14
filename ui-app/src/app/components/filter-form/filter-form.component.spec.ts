import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormComponent } from './filter-form.component';
import { FilterFormModule } from './filter-form.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FilterFormModule,
        NoopAnimationsModule,
      ],
      declarations: [ FilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
