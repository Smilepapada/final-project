import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'ฟา',telephone:'0994813642',imageUrl:'assets/imgs/22.png'}
    ,{name:'ต้า',telephone:'0950682152',imageUrl:'assets/imgs/11.png'}
    ,{name:'ตา',telephone:'0980161509',imageUrl:'assets/imgs/111.jpg'}
    ,{name:'ภูมิ',telephone:'0622434459',imageUrl:'assets/imgs/55.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
