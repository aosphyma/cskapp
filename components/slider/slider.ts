import { Component, Input, /*Output*/} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import * as firebase from 'firebase';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html',
})
export class SliderComponent {
  @Input('page') page: FirebaseListObservable<any>;
  text: string;
  slides: FirebaseListObservable<any>;

  constructor(public afb: AngularFireDatabase) {
    // firebase.storage().ref('slides/IMG_0366.JPG').getDownloadURL().then( (url) => {
    //   this.afb.list('/Slides').push({
    //     src: url,
    //     alt: 'Sport'
    //   })
    // });
    // this.slides = afb.list('/Slides');
  }
  ngAfterViewInit(){
    this.slides = this.page;
  }
}
