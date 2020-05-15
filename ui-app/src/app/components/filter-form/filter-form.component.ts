import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterFormValues } from '../../models/filter-form-values';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterFormComponent implements OnInit, OnDestroy {
  subscription$ = new Subject();
  formGroup = new FormGroup({
    allFields: new FormControl(null),
  });

  @Output()
  valueChanges = new EventEmitter<FilterFormValues>();

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.pipe(
      map(val => this.valueChanges.emit(val)),
      takeUntil(this.subscription$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  resetForm() {
    this.formGroup.reset();
  }
}
