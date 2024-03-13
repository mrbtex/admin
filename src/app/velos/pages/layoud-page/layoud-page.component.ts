import { Component } from '@angular/core';

@Component({
  selector: 'app-layoud-page',
  templateUrl: './layoud-page.component.html',
  styleUrl: './layoud-page.component.css'
})
export class LayoudPageComponent {
  public sideBarList = [
    { label: 'Listado', icon: 'label', url: "./list"},
    { label: 'add', icon: 'add', url: "./new"},
    { label: 'buscar', icon: 'label', url: "./search"}
  ]
}
