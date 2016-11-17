import { Component, ViewChild } from '@angular/core';

import { NavController, Gesture } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //this is the elementRef for our div
  @ViewChild('test') test;
  gesture: Gesture

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    //create gesture obj w/ ref to div
    this.gesture = new Gesture(this.test.nativeElement);    
    
    //tell hammer to listen
    this.gesture.listen();
    
    //explictly turn on listening for pinch events
    this.gesture.on('pinch', () => console.log('pinch event'));
    
    //listen separately for pinchend
    this.gesture.on('pinchend', () => console.log('pinch end event'));
  }
  
}
