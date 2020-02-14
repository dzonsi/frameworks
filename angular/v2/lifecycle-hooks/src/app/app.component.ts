import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lifecycle-hooks';
  show:boolean = false;
  data:string[] = ['first', 'second', 'third', 'fourth'];
  power: string = 'fly';
  advertisements: boolean = true;

  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
  	this.ads = this.adService.getAds();
  }

  changeStatus():void {
  	this.show = !this.show;
  }
  add(text: string): void {
  	this.data.push(text);
  }
  changePower(text: string):void {
  	this.power = text;
  }
  hideAdvertisements() {
  	this.advertisements = !this.advertisements;
  }
}
