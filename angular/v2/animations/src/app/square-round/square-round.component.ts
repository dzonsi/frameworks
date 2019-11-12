import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-square-round',
  animations: [
  	trigger("squareRound", [
  		state("square", style({
				borderRadius: 0
  		})),
  		state("round", style({
				borderRadius: "50%"
  		})),
  		transition("square => round", [
        group([
          query(".pos", [
            animateChild()
          ]),
  			  animate("3s",keyframes([
            style({borderRadius: 0}),
            style({borderRadius: "50%"})
          ])),
        ])
  		]),
  		transition("round => square", [
        group([
  			  animate("3s", keyframes([
            style({borderRadius: "50%"}),
            style({borderRadius: 0})
          ])),
          query(".pos", [
            animateChild()
          ])
        ])
  		]),
  	]),
  	trigger("scale", [
  		state("normal", style({
				transform: "translate(-50%, -50%) scale(1)",
				color: "white"
  		})),
  		state("big", style({
				transform: "translate(-50%, -50%) scale(1.5)",
				color: "yellow"
  		})),
  		transition("normal => big", [
  			animate("3s", keyframes([
  				style({color: "white", transform: "translate(-50%, -50%) scale(1)"}),
  				style({color: "white", transform: "translate(-50%, -50%) scale(1.25)"}),
  				style({color: "yellow", transform: "translate(-50%, -50%) scale(1.5)"})
  			]))
  		]),
  		transition("big => normal", [
  			group([
  				animate("3s", keyframes([
  				style({color: "yellow"}),
    			style({color: "white"})
  				])),
  				animate("2s", keyframes([
  				style({transform: "translate(-50%, -50%) scale(1.5)"}),
    			style({transform: "translate(-50%, -50%) scale(1)"})
  				]))
  			])
  		]),
  	])
  ],
  templateUrl: './square-round.component.html',
  styleUrls: ['./square-round.component.css']
})
export class SquareRoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  round = true;

  animationToggle = function() {
  	this.round = !this.round;
  }
}
