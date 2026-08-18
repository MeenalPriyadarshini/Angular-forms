import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../components/form-nav/form-nav.component';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private navItemsSource = new BehaviorSubject<NavItem[]>([]);
  currentNavItems = this.navItemsSource.asObservable();

  constructor() { }

  setNavItems(items: NavItem[]) {
    this.navItemsSource.next(items);
  }
}