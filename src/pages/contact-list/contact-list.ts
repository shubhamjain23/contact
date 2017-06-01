import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ShareProvider } from '../../providers/share/share';

@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareProvider) {}

  newContact(){
  this.navCtrl.push(HomePage);
  }
  editContact(data){
    this.shareService.setEditableData(data);
    this.navCtrl.push(HomePage);
  }
public contacts:Array<Object>;
  ionViewDidLoad() {
  this.contacts = this.shareService.getContactList();
  }

}
