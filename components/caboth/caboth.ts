import { Component } from '@angular/core';

/**
 * Generated class for the CabothComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'caboth',
  templateUrl: 'caboth.html'
})
export class CabothComponent {

  text: string;

  constructor() {
    console.log('Hello CabothComponent Component');
    this.text = 'Hello World';
  }

}
