import { Component } from '@angular/core';

/**
 * Generated class for the CaallComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'caall',
  templateUrl: 'caall.html'
})
export class CaallComponent {

  text: string;

  constructor() {
    console.log('Hello CaallComponent Component');
    this.text = 'Hello World';
  }

}
