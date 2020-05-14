import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistItemComponent } from './specialist-item.component';
import { SpecialistItemModule } from './specialist-item.module';

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
});
