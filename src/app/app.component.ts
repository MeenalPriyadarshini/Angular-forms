import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { FormNavComponent } from './components/form-nav/form-nav.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavService } from './services/nav.service';
import { NavItem } from './components/form-nav/form-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidebarNavComponent, FormNavComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent {
  isHomeView = false;
  currentUrl = '';
  formNavItems: NavItem[] = []; // To hold the form-specific navigation items

  constructor(private router: Router, private navService: NavService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Consider home view when the URL is exactly '/' or '/home'
      this.isHomeView = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
      this.currentUrl = event.urlAfterRedirects;
    });

    // Subscribe to the nav service to get the form-specific navigation items
    this.navService.currentNavItems.subscribe(items => {
      this.formNavItems = items;
    });
  }
}