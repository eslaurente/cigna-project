import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistFinderHeaderComponent } from './specialist-finder-header.component';
import { SpecialistFinderHeaderModule } from './specialist-finder-header.module';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import createSpy = jasmine.createSpy;

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
    const tb = TestBed.overrideComponent(SpecialistFinderHeaderComponent, {
      set: {changeDetection: ChangeDetectionStrategy.Default},
    });
    fixture = tb.createComponent(SpecialistFinderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render #loadingContainer', async(() => {
    component.isLoading = true;
    fixture.detectChanges();
    const el = fixture.debugElement.query(i => i.references.loadingContainer);

    expect(el).toBeTruthy();
  }));

  it('should render #headerContainer', async(() => {
    component.isLoading = false;
    fixture.detectChanges();
    const el = fixture.debugElement.query(i => i.references.headerContainer);

    expect(el).toBeTruthy();
  }));

  it('should trigger the refresh output', async(() => {
    const spy = createSpy();
    component.isLoading = false;
    component.refresh.subscribe(spy);
    const button = fixture.debugElement.query(By.css('.refresh-button button'));

    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  }));
});
