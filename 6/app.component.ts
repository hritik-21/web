import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Posts</h1>
    <div *ngFor="let post of posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.posts = data.slice(0, 10));
  }
}
