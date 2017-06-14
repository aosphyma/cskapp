import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the TestdirectiveDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[testdirective]' // Attribute selector
})
export class TestdirectiveDirective {

  @Input('testdirective') page: string;

  constructor(public er: ElementRef) {
    console.log('Hello TestdirectiveDirective Directive ');
    // er.nativeElement.getElementsByClassName('card-content')[0].innerHTML = 'Hello test directive';
    console.log(this.page);
    console.log(er.nativeElement.getElementsByClassName('card-content'));
  }
}
