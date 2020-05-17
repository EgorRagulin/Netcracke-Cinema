import { Injectable } from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  public isFormControlInvalid(fc: AbstractControl, validationType: string): boolean {
    return fc.hasError(validationType) && (fc.dirty || fc.touched);
  }
}
