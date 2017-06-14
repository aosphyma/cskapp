import { Component/*, Input*/, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CskarticleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cskarticle',
  templateUrl: 'cskarticle.html'
})
export class CskarticleComponent {
  @Output('clickgoToPage') goToPage: EventEmitter<any> = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello CskarticleComponent Component');
    this.text = 'Hello World';
    // let interval = setInterval(() => {
    //   this.goToPage.emit('its time');
    // }, 3000);
  }
}
