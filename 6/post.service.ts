import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  async getPosts() {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data.slice(0, 10);
  }
}
