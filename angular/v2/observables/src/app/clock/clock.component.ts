import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

	obs: Observable<string>;
	clock: Subscription;
	time: string;

  constructor() { }

  ngOnInit() {
  	this.obs = interval(1000).pipe(
  		map(tick => new Date().toLocaleTimeString())
  	);
  	this.clock = this.obs.subscribe(time => this.time = time);
  	console.log('Subscribe to clock!');
  }

  ngOnDestroy() {
  	this.clock.unsubscribe();
  	console.log('Unsubscribe to clock!');
  }

}
