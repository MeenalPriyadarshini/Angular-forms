import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  children?: string[];
}

@Component({
  selector: 'app-form-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-nav.component.html',
  styleUrls: ['./form-nav.component.css']
})
export class FormNavComponent {

  @Input() navItems: NavItem[] = [
    {
      label: 'File'
    },

    {
      label: 'Outward',
      children: [
        'Registration/Allotment',
        'Stuffing/Sealing',
        'Gate Pass',
        'Job Orders',
        'Print',
        'Container Status',
        'Pending Registration'
      ]
    },

    {
      label: 'Inward',
      children: [
        'Registration/Allotment',
        'Stuffing/Sealing',
        'Gate Pass',
        'Job Orders',
        'Print',
        'Container Status',
        'Pending Registration'
      ]
    },

    {
      label: 'Train/Ship',
      children: [
        'Registration/Allotment',
        'Stuffing/Sealing',
        'Gate Pass',
        'Job Orders',
        'Print',
        'Container Status',
        'Pending Registration'
      ]
    },

    {
      label: 'Registration'
    },

    {
      label: 'Close'
    },

    {
      label: 'Allotment'
    },

    {
      label: 'QTL Register'
    },

    {
      label: 'Stuffing/Sealing'
    },

    {
      label: 'Gate Pass'
    },

    {
      label: 'Job Orders'
    },

    {
      label: 'Print'
    },

    {
      label: 'Container Status'
    },

    {
      label: 'Pending Registration'
    },

    {
      label: 'Commodity Help'
    },

    {
      label: 'Help'
    }
  ];

  hoveredIndex: number | null = null;


  onItemEnter(index: number): void {
    this.hoveredIndex = index;
  }


  onItemLeave(): void {
    this.hoveredIndex = null;
  }


  hasChildren(item: NavItem): boolean {
    return !!item.children && item.children.length > 0;
  }
}