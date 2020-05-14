import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FilterFormValues } from '../../models/filter-form-values';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterFormComponent implements OnInit {
  formGroup = new FormGroup({
    allFields: new FormControl(null),
  });

  @Output()
  valueChanges: Observable<FilterFormValues> = this.formGroup.valueChanges;

  constructor() {
  }

  ngOnInit(): void {
  }

}
