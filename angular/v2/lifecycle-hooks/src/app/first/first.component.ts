import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChange, ChangeDetectorRef,
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
  @Input() addNew: any;
  @Input() changePower: any;

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
  	this.addNew(text);
  	this.text = '';
  	this.cd.detectChanges();
  }

  addNewPower(text: string): void {
  	this.changePower(text);
  	this.newPower = '';
  }

}
