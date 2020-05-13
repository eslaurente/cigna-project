import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-specialist-finder-header',
  templateUrl: './specialist-finder-header.component.html',
  styleUrls: ['./specialist-finder-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistFinderHeaderComponent implements OnInit {
  @Input()
  isLoading: boolean;

  @Input()
  count: number;

  @Output()
  refresh = new EventEmitter<undefined>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
