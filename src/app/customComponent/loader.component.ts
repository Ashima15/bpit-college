import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  template: `
  <i class="fa fa-spinner fa-spin" style="font-size:50px" *ngIf="condition"></i>`,
})

export class CustomLoader {

  @Input() condition: boolean;

  constructor() {

  }

}
