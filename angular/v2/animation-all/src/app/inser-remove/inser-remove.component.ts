import { Component, OnInit } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	group,
	keyframes,
	query,
	sequence,
	stagger,
	animation,
	useAnimation,
	animateChild
} from '@angular/animations';
import { transAnimation } from '../animations';

@Component({
  selector: 'app-inser-remove',
  templateUrl: './inser-remove.component.html',
  styleUrls: ['./inser-remove.component.css'],
  animations: [
  	trigger('myInsertRemoveTrigger', [
  		transition(':enter', [
  			style({opacity: 0, left: '-100%'}),
  			useAnimation(transAnimation, {
  				params: {
  					left: "400px",
  					opacity: 0,
  					time: '5s'
  				}
  			})
  		]),
  		transition(':leave', [
  			animate('5s', style({ opacity: 0 }))
  		])
  	]),
  	trigger('rotate',[
  		state('show', style({
  			display: "block"
  		})),
  		state('close', style({
  			display: "none"
  		})),
  		transition('show => close', [
  			animate('.5s')
  		]),
  		transition('close => show', [
  			animate('.5s')
  		])
  	]),
 	]
})
export class InserRemoveComponent implements OnInit {
	isShown = true;
	isRotate = false;
	insert() {
		this.isShown = !this.isShown;
	}
	changeRotate() {
		this.isRotate = !this.isRotate;
	}
	onAnimationEventStart( event: AnimationEvent ) {
		this.changeRotate();
		alert("Animation has start!");
	}
	onAnimationEventDone( event: AnimationEvent ) {
		alert("Animation is finish!");
		this.changeRotate();
	}
  constructor() { }

  ngOnInit() {
  }

}