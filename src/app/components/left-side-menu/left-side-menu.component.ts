import { Component, Input, OnChanges } from '@angular/core';

import { onSideNavChange, animateText } from './animations/animations'

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftSideMenuComponent implements OnChanges {
  @Input()
  public isOpen: boolean;

  public linksVisible: boolean;

  ngOnChanges(): void {
    setTimeout(() => {
      this.linksVisible = this.isOpen;
    }, 50);
  }

  public onSinenavToggle() {
    setTimeout(() => {
      this.linksVisible = this.isOpen;
    }, 200);

  }
}
