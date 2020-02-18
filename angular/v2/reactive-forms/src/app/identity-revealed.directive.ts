import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
};
@Directive({
  selector: '[appIdentityRevealed]'
})
export class IdentityRevealedDirective {

  constructor() { }

}
