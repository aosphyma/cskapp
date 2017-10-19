import { Component } from '@angular/core';

/**
 * Generated class for the CalinkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calink',
  templateUrl: 'calink.html'
})
export class CalinkComponent {

  text: string;

  constructor() {
    console.log('Hello CalinkComponent Component');
    this.text = 'Hello World';
  }

}
