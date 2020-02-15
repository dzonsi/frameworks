import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {}

  @Input('appCustom') fontSize: string;

  @HostListener('mouseenter') onMouseEnter() {
  	this.custom(this.fontSize || '20px');
  }

  @HostListener('mouseleave') onMouseLeave() {
  	this.custom(null);
  }

  private custom(fontSize: string) {
  	this.el.nativeElement.style.fontSize = fontSize;
  }

}
