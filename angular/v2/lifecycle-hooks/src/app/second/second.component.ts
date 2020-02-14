import { Component, OnInit, OnDestroy, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
  	console.log('ngOnChanges');
  }
  ngOnInit() {
  	console.log('ngOnInit');
  }
  ngDoCheck() {
  	console.log('ngDoCheck');
  }
  ngAfterContentInit() {
  	console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
  	console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
  	console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
  	console.log('ngAfterViewChecked')
  }
  ngOnDestroy() {
  	console.log('ngOnDestroy')
  }

}
