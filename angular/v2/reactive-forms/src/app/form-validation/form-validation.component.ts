import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.directive';
import { identityRevealedValidator } from '../identity-revealed.directive';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  myForm: FormGroup;

  ngOnInit(): void {
  	this.myForm = new FormGroup({
  		'name': new FormControl('', [
  			Validators.required,
  			Validators.minLength(4),
        forbiddenNameValidator(/john/i)
  		]),
      'alterEgo': new FormControl('Superman', [
        Validators.required
      ])
  	}, { validators: identityRevealedValidator })
  }

   get name() { return this.myForm.get('name'); }

}
