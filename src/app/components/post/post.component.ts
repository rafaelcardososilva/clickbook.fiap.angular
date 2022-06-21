import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
