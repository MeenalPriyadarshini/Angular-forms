import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  route?: string; // Optional route for navigation
}

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
  menuItems: MenuItem[] = [
    { name: 'File', route: '/file' },
    { name: 'Outward', route: '/outward' },
    { name: 'Inward', route: '/inward' },
    { name: 'Train/Ship', route: '/train-ship' },
    { name: 'PFT/Coastal/Coal', route: '/pft-coastal-coal' },
    { name: 'Job Orders', route: '/job-orders' },
    { name: 'Gate', route: '/gate' },
    { name: 'Stack', route: '/stack' },
    { name: 'Miscellaneous', route: '/miscellaneous' },
    { name: 'Cut In', route: '/cut-in' },
    { name: 'Warehouse', route: '/warehouse' },
    { name: 'MIS', route: '/mis' },
    { name: 'Supervisory Tasks', route: '/supervisory-tasks' },
    { name: 'Master Maintenance', route: '/master-maintenance' },
    { name: 'Help', route: '/help' }
  ];

  hoveredTopIndex: number | null = null;
  isCollapsed = true; // start collapsed (icons only)

  constructor(private router: Router) {}

  onTopEnter(index: number): void {
    this.hoveredTopIndex = index;
  }

  onTopLeave(): void {
    this.hoveredTopIndex = null;
  }

  isActive(index: number): boolean {
    return this.hoveredTopIndex === index;
  }

  // Sidebar expand/collapse
  onSidebarEnter(): void {
    this.isCollapsed = false;
  }

  onSidebarLeave(): void {
    this.isCollapsed = true;
  }

  // Navigate to route when clicking
  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}