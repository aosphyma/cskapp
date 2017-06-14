import { Component } from '@angular/core';

/**
 * Generated class for the CskfooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cskfooter',
  templateUrl: 'cskfooter.html'
})
export class CskfooterComponent {

  text: string;

  constructor() {
    console.log('Hello CskfooterComponent Component');
    this.text = 'Hello World';
  }

}
