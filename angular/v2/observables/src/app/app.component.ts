import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { fromEvent, Subscription, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, catchError, finalize, retryWhen, tap, delayWhen } from 'rxjs/operators';

import { UsersService } from './users.service';
import { ClockComponent } from './clock/clock.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

	title: string = 'Observables';
	showClock: boolean = true;

	loading: boolean = true;
	error: boolean = false;
	ajaxError: boolean = false;

	listenClick: Subscription;
	userSubscription: Subscription;
	newUserSubscription: Subscription;

	constructor(public users: UsersService) {}

	user: any = {};

	toggleClock() {
		this.showClock = !this.showClock;
	}

	getUser(id) {
		console.log(`Getting user with id: ${id}`);
		this.loading = true;
		this.error = false;
		this.ajaxError = false;
		// check if id is valid
		if(id < 1 || id > 10 || id === '') {
			this.loading = false;
			this.error = true;
		}
		// check if user with that id
		// is already show
		else if (this.user.id == id) {
			this.loading = false;
			console.log('User already exist!');
		}
		// get user
		else {
			// if there is pending request from
			// userSubscription cancel it
			if(this.userSubscription) {
				this.userSubscription.unsubscribe();
			}
			// if there is pending request from
			// this function cancel it
			if(this.newUserSubscription) {
				this.newUserSubscription.unsubscribe();
			}
			// subscribe to new user
			this.newUserSubscription = this.users.fetchUser(id).subscribe(
				user => {
					this.user = user;
				},
				err => {
					this.loading = false;
					this.ajaxError = true;
					console.error(err);
				},
				() => {
					this.loading = false;
					console.log('done');
				}
			);
		}
	}

	ngOnInit() {
		// setTimeout for practice only
		setTimeout(() => {
			this.userSubscription = this.users.fetchUser(1).pipe(
				// catch error if there is eny
				// and return new error for practice purpose
				catchError(err => {
					console.log('Handling error', err);
					return throwError(err);
				}),
				// finalize is executed after observables end
				finalize(() => console.log('First finalize() block executed')),
				// catch error again,
				// and return new error
				// again for practice
				catchError(err => {
					console.log('caught rethrown error');
					return throwError(err);
				}),
				// returns an Observable that mirrors the source Observable
				// with exeception of an error.
				// in our case this method will resubscribe
				// to the source Observable
				// only called once
				retryWhen(errors => {
					return  errors
						.pipe(
							// each time there is an error
							// delayWhen is going to create
							// a duration selector Observable
							// by calling timer function
							// timer will emit value 0
							// after 2 seconds, and then complete
							// after that delayWhen knows that
							// delay of a given input error
							// has elapsed, and error show up
							// in the output
							// once a value gets emitted in
							// the notification Observable,
							// the retryWhen operator will
							// then and only then executed
							// a retry attempt
							delayWhen(() => timer(2000)),
							tap(() => console.log('retrying...'))
						);
				}),
				// finalize is executed after observables end
				finalize(() => console.log('Second finalize() block executed'))
			)
			.subscribe(
				user => {
					this.user = user;
				},
				err => {
					this.loading = false;
					this.ajaxError = true;
					console.error(err);
				},
				() => {
					this.loading = false;
					console.log('done');
				}
			);
		}, 2000);
	}

	ngAfterViewInit() {
		this.listenClick = fromEvent(document.body, 'click').subscribe((e: MouseEvent) => {
			const x = e.clientX;
			const y = e.clientY;
			console.log(`Client X/Y: ${x}, ${y}`);
		})
	}

	ngOnDestroy() {
		// unsubscribe from all posible observables
		this.listenClick.unsubscribe();
		this.userSubscription.unsubscribe();
		this.newUserSubscription.unsubscribe();
	}


}
