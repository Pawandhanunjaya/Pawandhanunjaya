import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { checkDate } from './cheackdate';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  
  uploadform = new FormGroup({
    videourl : new FormControl('',[Validators.required,Validators.pattern(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/)]),
    vediotitle: new FormControl('',[Validators.required,Validators.maxLength(120)]),
    vedioduration:new FormControl('',[Validators.required,Validators.pattern(/([01]?[0-9]|2[0-3]):[0-5][0-9]/)]),
    channeltitle:new FormControl('',[Validators.required])
  })

  


 
  get videourl()
  {
   
    return this.uploadform.get('videourl');
  }

  get vediotitle()
  {
    return this.uploadform.get('vediotitle');
  }

  get vedioduration()
  {
    return this.uploadform.get('vedioduration')
  }

  get channeltitle()
  {
    return this.uploadform.get('channeltitle');
  }

  

  inputdata()
  {
    console.log(this.uploadform.value);
  }


   //new Form Validation 

   opinion:boolean=false;


   hidenewform:boolean=true;

   displaynewform:boolean=true;

   routelivestream :boolean=false;
   initial:boolean=true;

   changeform()
   {
     this.opinion=true;
     this.hidenewform=false;
     this.displaynewform=false;
     this.routelivestream=false
    
   }
  

   //livestream display priorities
  
   displaylivestream()
   {
    this.opinion=true;
     this.displaynewform=true;
    this.hidenewform=true;
     this.routelivestream=true;
    
   }



   dd:Date=new Date

   liveForm =new FormGroup({
    eTitle:new FormControl('',[Validators.required]),
    sDate:new FormControl('',[Validators.required,checkDate(new Date)]),
    eDate:new FormControl('',[Validators.required,checkDate(new Date("2022-05-01"))])
    // eDate:new FormControl('',[Validators.required,checkDate(new Date("2022-05-01"))])
  })
   



get eTitle(){
  return this.liveForm.get('eTitle')
}
get sDate(){
  return this.liveForm.get('sDate')
}
get sTime(){
  return this.liveForm.get('sTime')
}
get eDate(){
  return this.liveForm.get('eDate')
}
get eTime(){
  return this.liveForm.get('eTime')
}
   
  
}
