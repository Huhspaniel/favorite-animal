import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-friends',
	templateUrl: './friends.component.html',
	styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

	friends: object[] = [];

	constructor() {
		for (let i = 0; i < 20; i++) {
			this.friends.push(
				{
					name: `friend${i}`,
					username: `user${i}`,
				}
			);
		}
	}

	ngOnInit() {
	}

}
