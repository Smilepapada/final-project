import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the BarcordScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcord-scanner',
  templateUrl: 'barcord-scanner.html',
})
export class BarcordScannerPage {
  scanText ="";
  scanFormat ="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad BarcordScannerPage');
  }

  scan(){

  this.barcodeScanner.scan().then(
    (data) => {
      this.scanText=data.text 
      this.scanFormat =data.format 
   }
   ,
   (error)=>{console.log(error)}
  );
  }
}//end class
