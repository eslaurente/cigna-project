import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationComponent } from './main-navigation.component';
import { MainNavigationModule } from './main-navigation.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavigationComponent],
      imports: [
        MainNavigationModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render the router-outlet', () => {
    const comp = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(comp).toBeTruthy();
  });
});
