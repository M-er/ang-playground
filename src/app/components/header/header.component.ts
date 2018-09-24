import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	screenWidth: number;
	opened: boolean;
	constructor() {
		this.screenWidth = window.innerWidth;
		window.onresize = () => {
			this.screenWidth = window.innerWidth;
		};
	}
	ngOnInit() {
	}

}
