import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Cheackdate {
}
export function checkDate(currentdate:Date):ValidatorFn {
    return (control: AbstractControl): ValidationErrors|null =>{
  
    let selecteddate = new Date(control.value);

    return (selecteddate<currentdate)?{checkDate: {value:control.value}}:null;
    };
    }