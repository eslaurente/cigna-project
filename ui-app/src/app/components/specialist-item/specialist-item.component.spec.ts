import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistItemComponent } from './specialist-item.component';
import { SpecialistItemModule } from './specialist-item.module';
import { By } from '@angular/platform-browser';

describe('SpecialistItemComponent', () => {
  let component: SpecialistItemComponent;
  let fixture: ComponentFixture<SpecialistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SpecialistItemModule,
      ],
      declarations: [
        SpecialistItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle elevation class on mouseover/mouseleave', () => {
    fixture.debugElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('.mat-elevation-z8'));

    expect(el).toBeTruthy();

    fixture.debugElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('.mat-elevation-z8'));

    expect(el).toBeFalsy();
  });
});
