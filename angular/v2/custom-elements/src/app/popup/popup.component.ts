import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)', opacity: 0.8})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('300ms ease-in')),
    ])
  ],
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  _message = '';
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
  	this._message = message;
  	this.state = 'opened';
  }
  get message(): string {
  	return this._message;
  }

  @Output()
  closed = new EventEmitter();

}
