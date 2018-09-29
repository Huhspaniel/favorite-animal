import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: object[] = [];

	constructor() {
		for (let i = 0; i < 20; i++) {
			this.posts.push(
				{
					title: `post${i}`,
					user: `user${i}`,
				}
			);
		}
	}

	ngOnInit() {
	}

}
