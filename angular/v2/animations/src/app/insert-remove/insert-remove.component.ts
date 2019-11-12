import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  animations: [
  	trigger("myInsertRemoveTrigger", [
  		transition(":enter", [
  			style({ opacity: 0 }),
  			animate("5s", style({ opacity: 1 })),
  		]),
  		transition(':leave', [
    		animate('5s', style({ opacity: 0 }))
 			])
  	]),
  ],
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css']
})
export class InsertRemoveComponent implements OnInit {

	isShown = true;

	toggle() {
		this.isShown = !this.isShown;
	}

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    //console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    //console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    //console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    //console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    //console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    //console.warn(`Element: ${event.element}`);
  }


  constructor() { }

  ngOnInit() {
  }

}
