import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  subItems?: string[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      name: 'File',
      subItems: [
        'New',
        'Open',
        'Save',
        'Save As',
        'Print',
        'Export',
        'Import'
      ]
    },
    {
      name: 'Outward',
      subItems: [
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
      name: 'Inward',
      subItems: [
        'Delivery Order',
        'Gate Entry',
        'Inspection',
        'Damage Report',
        'Release Order'
      ]
    },
    {
      name: 'Train/Ship',
      subItems: [
        'Booking',
        'Scheduling',
        'Tracking',
        'Dispatch',
        'Arrival Notice'
      ]
    },
    {
      name: 'PFT/Coastal/Coal',
      subItems: [
        'PFT Operations',
        'Coastal Movement',
        'Coal Handling',
        'Berth Allocation',
        'Yard Planning'
      ]
    },
    {
      name: 'Job Orders',
      subItems: [
        'Create Job Order',
        'Assign Resources',
        'Track Progress',
        'Completion Report',
        'Billing'
      ]
    },
    {
      name: 'Gate',
      subItems: [
        'Gate In',
        'Gate Out',
        'Gate Pass Generation',
        'Vehicle Screening',
        'Document Verification'
      ]
    },
    {
      name: 'Stack',
      subItems: [
        'Stack Allocation',
        'Stock Verification',
        'House Keeping',
        'Reefer Monitoring',
        'Hazardous Cargo'
      ]
    },
    {
      name: 'Miscellaneous',
      subItems: [
        'Equipment Repair',
        'Facility Maintenance',
        'Safety Training',
        'Incident Reporting',
        'Visitor Management'
      ]
    },
    {
      name: 'Cut In',
      subItems: [
        'Container Preparation',
        'Documentation Check',
        'Seal Verification',
        'Weight Verification',
        'Staging Area'
      ]
    },
    {
      name: 'Warehouse',
      subItems: [
        'Receipt',
        'Dispatch',
        'Inventory Management',
        'Stock Taking',
        'Cargo Consolidation'
      ]
    },
    {
      name: 'MIS',
      subItems: [
        'Reports',
        'Analytics',
        'Dashboards',
        'KPI Monitoring',
        'Data Export'
      ]
    },
    {
      name: 'Supervisory Tasks',
      subItems: [
        'Performance Review',
        'Training Scheduled',
        'Equipment Allocation',
        'Shift Management',
        'Quality Control'
      ]
    },
    {
      name: 'Master Maintenance',
      subItems: [
        'Container Master',
        'Party Master',
        'Commodity Master',
        'Location Master',
        'Vehicle Master'
      ]
    },
    {
      name: 'Help',
      subItems: [
        'User Guide',
        'Video Tutorials',
        'FAQs',
        'Contact Support',
        'About System'
      ]
    }
  ];

  hoveredTopIndex: number | null = null;
  hoveredSubIndex: { top: number; sub: number } | null = null;

  constructor(private router: Router) {}

  onTopEnter(index: number): void {
    this.hoveredTopIndex = index;
  }

  onTopLeave(): void {
    this.hoveredTopIndex = null;
    this.hoveredSubIndex = null;
  }

  onSubEnter(topIndex: number, subIndex: number): void {
    this.hoveredSubIndex = { top: topIndex, sub: subIndex };
  }

  onSubLeave(): void {
    this.hoveredSubIndex = null;
  }

  isTopHovered(index: number): boolean {
    return this.hoveredTopIndex === index;
  }

  isSubHovered(topIndex: number, subIndex: number): boolean {
    return this.hoveredSubIndex?.top === topIndex && this.hoveredSubIndex?.sub === subIndex;
  }

  // Navigate to route when clicking
  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  // Get route for submenu items
  getSubItemRoute(subIndex: number): string {
    // Only Outward (index 1) has navigable submenu items for now
    if (this.hoveredTopIndex === 1) {
      switch (subIndex) {
        case 0: // Registration/Allotment (first item)
          return '/registration-allotment';
        default:
          // For now, other subitems don't navigate anywhere
          return '';
      }
    }
    return '';
  }
}