import {Component, Input,/*Output, EventEmitter*/ } from '@angular/core';

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
  @Input('renderPageCol0') col0: Array<any>;
  @Input('renderPageCol1') col1: Array<any>;
  // @Output('') goToPage: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
