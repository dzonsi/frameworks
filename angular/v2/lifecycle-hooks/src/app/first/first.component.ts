import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChange, ChangeDetectorRef,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  text: string = '';
  newPower: string = '';

  @Input() data: string[];
  @Input() power: string;
  @Output() addNew = new EventEmitter<string>();
  @Output() changePower = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChange) {
  	console.log('ngOnChanges');
  	console.log(changes);
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

  add(text: string): void {
  	this.addNew.emit(text);
  	this.text = '';
  	this.cd.detectChanges();
  }

  addNewPower(text: string): void {
  	this.changePower.emit(text);
  	this.newPower = '';
  }

}
