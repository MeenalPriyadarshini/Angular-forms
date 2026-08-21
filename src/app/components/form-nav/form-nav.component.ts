import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface NavItem {
  label: string;
}

@Component({
  selector: 'app-form-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-nav.component.html',
  styleUrls: ['./form-nav.component.css']
})
export class FormNavComponent {

  navItems: NavItem[] = [
    { label: 'File' },
    { label: 'Registration' },
    { label: 'Close' },
    { label: 'Allotment' },
    { label: 'QTL Register' },
    { label: 'Stuffing/Sealing' },
    { label: 'Gate Pass' },
    { label: 'Job Orders' },
    { label: 'Print' },
    { label: 'Container Status' },
    { label: 'Pending Registration' },
    { label: 'Commodity Help' },
    { label: 'Help' }
  ];


  hoveredIndex: number | null = null;


  constructor(private router: Router) {}


  onItemEnter(index: number): void {
    this.hoveredIndex = index;
  }


  onItemLeave(): void {
    this.hoveredIndex = null;
  }


  isHovered(index: number): boolean {
    return this.hoveredIndex === index;
  }


  /*
   * These are the menus that currently have
   * dropdown options.
   *
   * More submenu options can be added later
   * without changing the HTML.
   */
  hasSubmenu(item: NavItem): boolean {

    return [
      'File',
      'Registration',
      'Allotment',
      'QTL Register',
      'Stuffing/Sealing',
      'Gate Pass',
      'Job Orders',
      'Print',
      'Container Status',
      'Pending Registration',
      'Commodity Help',
      'Help'
    ].includes(item.label);

  }


  getSubmenu(item: NavItem): string[] {

    switch (item.label) {

      case 'File':
        return [
          'New',
          'Save',
          'Retrieve',
          'Close'
        ];


      case 'Registration':
        return [
          'Registration / Allotment',
          'Pending Registration'
        ];


      case 'Allotment':
        return [
          'Allotment Details',
          'QTL Register'
        ];


      case 'QTL Register':
        return [
          'View QTL Register',
          'Print QTL Register'
        ];


      case 'Stuffing/Sealing':
        return [
          'Stuffing',
          'Sealing'
        ];


      case 'Gate Pass':
        return [
          'Get In Pass',
          'Get Out Pass'
        ];


      case 'Job Orders':
        return [
          'View Job Orders',
          'Create Job Order'
        ];


      case 'Print':
        return [
          'Print Registration',
          'Print Allotment'
        ];


      case 'Container Status':
        return [
          'View Container Status'
        ];


      case 'Pending Registration':
        return [
          'View Pending Registration'
        ];


      case 'Commodity Help':
        return [
          'Commodity Search',
          'Commodity Details'
        ];


      case 'Help':
        return [
          'Help',
          'Shortcut Keys'
        ];


      default:
        return [];

    }

  }


  onSubmenuClick(option: string): void {

    console.log('Selected menu option:', option);

  }

}