import {
	Directive,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	OnDestroy,
	Output
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

	@Input() debounceTime = 500;
	@Output() debounceClick = new EventEmitter();
	private clicks = new Subject();
	private subscription: Subscription;

  constructor() { }

  ngOnInit() {
  	this.subscription = this.clicks
      // debounce event based on a given number
  		.pipe(debounceTime(this.debounceTime))
  		.subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    // unsubscribe on destroy
  	this.subscription.unsubscribe();
  }

  // list event on host element
  // first parameter is name of event
  // second parameter tell angular to
  // pass $event to our directive method
  @HostListener('input', ['$event'])
  clickEvent(event) {
  	event.preventDefault();
  	event.stopPropagation();
    // call subject next method on click
    // to emit the next value
    this.clicks.next(event);
  	console.log('Click from Host Element!');
  }

}
