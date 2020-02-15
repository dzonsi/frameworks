import { Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private injector: Injector) { }

  showAsElement(message: string) {

  	// create element
  	// import in polyfills.ts to make this work
  	const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

  	// listen to the close event
  	popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

  	// set the message
  	popupEl.message = message;

  	// add to the DOM
  	document.body.appendChild(popupEl);
  }
}
