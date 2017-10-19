import { Component } from '@angular/core';

/**
 * Generated class for the CavidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cavid',
  templateUrl: 'cavid.html'
})
export class CavidComponent {

  text: string;

  constructor() {
    console.log('Hello CavidComponent Component');
    this.text = 'Hello World';
  }

}
