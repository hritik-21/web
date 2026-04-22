import { Component } from '@angular/core';
import { ItemsComponent } from './items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Angular Experiment 6</h1>
      <hr>
      <app-items></app-items>
    </div>
  `
})
export class AppComponent {}