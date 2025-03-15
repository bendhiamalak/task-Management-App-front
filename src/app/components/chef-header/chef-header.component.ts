import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chef-header',
  templateUrl: './chef-header.component.html',
  styleUrl: './chef-header.component.css'
})
export class ChefHeaderComponent {

  @Input() userName='malek';
  @Output() toggleMenu = new EventEmitter<void>();
}
