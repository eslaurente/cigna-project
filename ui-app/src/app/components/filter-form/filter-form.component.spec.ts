import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormComponent } from './filter-form.component';
import { FilterFormModule } from './filter-form.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import createSpy = jasmine.createSpy;
import { By } from '@angular/platform-browser';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FilterFormModule,
        NoopAnimationsModule,
      ],
      declarations: [FilterFormComponent],
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

  it('should trigger formGroup reset on resetForm', () => {
    const spy = spyOn(component.formGroup, 'reset');
    component.resetForm();

    expect(spy).toHaveBeenCalled();
  });

  it('should trigger valueChanges output', () => {
    const spy = createSpy();
    const input = fixture.nativeElement.querySelector('input');
    component.valueChanges.subscribe(spy);
    input.value = 'Dr. Pepper';

    input.dispatchEvent(new Event('input'));

    expect(spy).toHaveBeenCalled();
  });
});
