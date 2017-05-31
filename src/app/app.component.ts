import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Primeros pasos con {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular4'; }
