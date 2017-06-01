import { Injectable } from '@angular/core';


@Injectable()
export class ShareProvider {
  
  private contacts: [{
    id:number,
    name:string,
    email:string,
    mobile:number,
    dob:string,
    gender:string,
    agreed:boolean
  }]=[{
      id:null,
      name:null,
      email:null,
      mobile:null,
      dob:null,
      gender:'female',
      agreed:false
  }]
  private id: number=0
  public tempContact:{
      id:number,
      name:string,
      email:string,
      mobile:number,
      dob:string,
      gender:string,
      agreed:boolean
    }={
      id:null,
      name:null,
      email:null,
      mobile:null,
      dob:null,
      gender:'female',
      agreed:false
    }
    constructor(){
      this.contacts.pop()
    }
  setContactList(value){
    value.id = ++ this.id;
    this.contacts.push(value);
  }
  updateContactList(value){
    for(let contact of this.contacts){
        if(contact.id==value.id){
          contact.name=value.name;
          contact.email=value.email;
          contact.mobile=value.mobile;
          contact.dob=value.dob;
          contact.gender=value.gender;
        }
    }
  }
  getContactList(){
    return this.contacts;
  }
  setEditableData(data){
    this.tempContact=data;
  }
}