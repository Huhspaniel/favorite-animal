import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FriendsComponent } from './friends/friends.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'account',
		component: AccountComponent
	},
	{
		path: 'friends',
		component: FriendsComponent
	},
	{
		path: 'posts',
		component: PostsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
