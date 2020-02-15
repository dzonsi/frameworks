import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'custom-elements';

  constructor(injector: Injector, public popup: PopupService) {
  	// convert PopupComponent to a custom element
  	const PopupElement = createCustomElement(PopupComponent, {injector});
  	// register the custom element with the browser
  	customElements.define('popup-element', PopupElement);
  }
}
