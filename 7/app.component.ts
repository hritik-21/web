import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <h1>Experiment 7: Angular Reactive Forms</h1>
      
      <div class="form-card">
        <h2>Add New Item</h2>
        <form [formGroup]="itemForm" (ngSubmit)="addItem()">
          <div class="form-group">
            <label for="title">Title</label>
            <input id="title" type="text" formControlName="title" placeholder="Enter title">
            <div *ngIf="itemForm.get('title')?.invalid && itemForm.get('title')?.touched" class="error">
              Title is required.
            </div>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" formControlName="description" placeholder="Enter description"></textarea>
            <div *ngIf="itemForm.get('description')?.invalid && itemForm.get('description')?.touched" class="error">
              Description is required (min 5 characters).
            </div>
          </div>

          <button type="submit" [disabled]="itemForm.invalid">Add Item</button>
        </form>
      </div>

      <div class="list-card">
        <h2>Items List</h2>
        <ul>
          <li *ngFor="let item of items">
            <strong>{{ item.title }}</strong>
            <p>{{ item.description }}</p>
          </li>
          <li *ngIf="items.length === 0" class="empty">No items added yet.</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 40px auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
    }
    .form-card, .list-card {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 20px;
    }
    h1 { text-align: center; color: #1a73e8; }
    h2 { border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 0; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; font-weight: 600; }
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 6px;
      box-sizing: border-box;
    }
    textarea { height: 80px; }
    button {
      background: #1a73e8;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      font-weight: bold;
    }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .error { color: #d93025; font-size: 0.85rem; margin-top: 5px; }
    ul { list-style: none; padding: 0; }
    li {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
    li:last-child { border-bottom: none; }
    .empty { color: #888; text-align: center; }
  `]
})
export class AppComponent {
  itemForm: FormGroup;
  items: { title: string; description: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  addItem() {
    if (this.itemForm.valid) {
      this.items.push(this.itemForm.value);
      this.itemForm.reset();
    }
  }
}
