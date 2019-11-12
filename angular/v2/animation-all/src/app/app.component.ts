import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger("basic", [
  		state("small", style({
  			width: '200px',
				height: '200px',
				borderRadius: 'initial',
				backgroundColor: 'linen',
				marginTop: '20px',
				position: 'relative',
				top: 0,
				left: 0
  		})),
  		state("big", style({
  			width: '400px',
				height: '100px',
				borderRadius: '20px',
				backgroundColor: 'tomato',
				marginTop: '20px'
  		})),
  		state("middle", style({
  			width: '100px',
				height: '100px',
				borderRadius: '20px',
				backgroundColor: 'orange',
				marginTop: 0,
				position: 'relative',
				top: '50px',
				left: '300px'
  		})),
  		transition('small => big', [
  			animate('5s linear', keyframes([
  				style({ width: '200px',
									height: '200px',
									borderRadius: 'initial',
									backgroundColor: 'linen',
									marginTop: '20px' }),
  				style({ width: '300px',
									height: '150px',
									borderRadius: '5px',
									backgroundColor: 'green',
									marginTop: '20px' }),
  				style({ width: '400px',
									height: '100px',
									borderRadius: '20px',
									backgroundColor: 'tomato',
									marginTop: '20px' }),
  			])),
  		]),
  		transition('big => small', [
  			animate('1s')
  		]),
  		transition('small => middle', [
  			animate('5s linear', keyframes([
  				style({ width: '200px',
									height: '200px',
									borderRadius: 'initial',
									backgroundColor: 'linen',
									marginTop: '20px',
									position: 'relative',
									top: 0,
									left: 0 }),
  				style({ width: '150px',
									height: '150px',
									borderRadius: '5px',
									backgroundColor: 'green',
									marginTop: '10px',
									position: 'relative',
									top: '25px',
									left: '150px' }),
  				style({ width: '100px',
									height: '100px',
									borderRadius: '20px',
									backgroundColor: 'orange',
									marginTop: 0,
									position: 'relative',
									top: '50px',
									left: '300px' }),
  			])),
  		]),
  		transition('middle => small', [
  			animate('1s')
  		]),
  		transition('middle <=> big', [
  			animate('1s')
  		]),
  	]),
  ],
})
export class AppComponent {
  title = 'Animations';
  isAnimate = 'small';
  toggle() {
  	if(this.isAnimate == 'small') {
  		this.isAnimate = 'big';
  	} else {
  		this.isAnimate = 'small';
  	}
  }
  toggleMiddle() {
  	if(this.isAnimate == 'small') {
  		this.isAnimate = 'middle';
  	} else if (this.isAnimate == 'middle') {
  		this.isAnimate = 'big';
  	} else if(this.isAnimate == 'big') {
  		this.isAnimate = 'small';
  	}
  }
}
