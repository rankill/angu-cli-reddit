import { Component, OnInit } from '@angular/core';

// Services
import { RedditService } from './../../shared/reddit.service';

// Classes
import { Post } from './../../classes/post';

// Constants
const postLimit = 50;

@Component({
  selector: 'app-reddit-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  title = `Home`;
  infoQuantity = `Listed ${postLimit} posts`;
  posts: Post[];
  errorPosts = false;


  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit(): void {
    console.warn('Inicio');

    //noinspection TypeScriptUnresolvedFunction
    this.redditService.getLatestPosts(postLimit)
      .then(_posts => {
        console.warn('Pedido pai', _posts);
        this.posts = _posts;
        this.redditService.saveLatesPost(this.posts);
      }, error => this.errorPosts = true);
  }
}
