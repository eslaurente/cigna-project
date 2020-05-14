import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  formGroup = new FormGroup({
    allFields: new FormControl(null),
  });

  constructor() { }

  ngOnInit(): void {
    this.formGroup.valueChanges.pipe(
      tap({
        next: value => console.log(value)
      })
    ).subscribe();
  }

}
