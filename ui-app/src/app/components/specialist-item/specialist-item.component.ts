import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-specialist-item',
  templateUrl: './specialist-item.component.html',
  styleUrls: ['./specialist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SpecialistItemComponent implements OnInit {
  isHovered = false;

  @Input()
  name: string;

  @Input()
  specialty: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseover') onMouseOver() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

}
