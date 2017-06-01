import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactListPage } from '../contact-list/contact-list';
import { ShareProvider } from '../../providers/share/share';
import { DeclarationProvider } from '../../providers/declaration/declaration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  complexForm: FormGroup;
  public contactObject:{
      id:number,
      name:string,
      email:string,
      mobile:number,
      dob:string,
      gender:string,
      agreed:boolean
    }={
      id:0,
      name:null,
      email:null,
      mobile:null,
      dob:null,
      gender:'female',
      agreed:false
    }
    private isEditable

  constructor(public navCtrl: NavController,public fb: FormBuilder,public shareService:ShareProvider, public declaration:DeclarationProvider) {
    
    this.isEditable=false
    this.complexForm=fb.group({
      'name': [null, Validators.required],
      'email':[null, Validators.required],
      'mobile':null,
      'dob':[null,Validators.required],
      'gender': ['female',Validators.required],
      'agreed':[false, Validators.pattern('true')]
    })
  }
  submitForm(value: any):void{
      if(value.hasOwnProperty('id'))
        this.shareService.updateContactList(value);
      else
        this.shareService.setContactList(value);

      this.contactObject=this.declaration.contactObject;
      this.navCtrl.popToRoot();
      this.navCtrl.push(ContactListPage);
  }
  skip(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    this.isEditable=false;
    if(this.shareService.tempContact.id){
      this.isEditable=true;
      this.contactObject.id=this.shareService.tempContact.id;
      this.contactObject.name=this.shareService.tempContact.name;
      this.contactObject.email=this.shareService.tempContact.email;
      this.contactObject.mobile=this.shareService.tempContact.mobile;
      this.contactObject.dob=this.shareService.tempContact.dob;
      this.contactObject.gender=this.shareService.tempContact.gender;
      this.contactObject.agreed=this.shareService.tempContact.agreed;
    }
    this.shareService.tempContact=this.declaration.contactObject;
  }
}
