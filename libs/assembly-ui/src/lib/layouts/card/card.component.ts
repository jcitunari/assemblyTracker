import { Component, Input, contentChild } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'assembly-ui-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() variant: 'default' | 'outlined' | 'elevated' = 'default';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() responsivePadding = true;
  @Input() fullWidth = false;
  @Input() maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'none' = 'none';

  // Angular 21 signals
  header = contentChild('[card-header]');
  content = contentChild('[card-content]');
  footer = contentChild('[card-footer]');
}
