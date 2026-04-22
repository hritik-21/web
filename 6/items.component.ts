import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item-list">
      <h2>Items from API</h2>
      <div *ngFor="let post of posts" class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  `,
  styles: [`
    .post-card { border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px; }
    h3 { color: #2c3e50; text-transform: capitalize; }
  `]
})
export class ItemsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.posts = await this.postService.getPosts();
  }
}
