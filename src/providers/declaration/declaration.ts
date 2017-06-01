import { Injectable } from '@angular/core';

@Injectable()
export class DeclarationProvider {
  public contactObject:{
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

}
