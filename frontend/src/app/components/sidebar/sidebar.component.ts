import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  template: `
    <aside class="sidebar" [class.collapsed]="sidebarService.collapsed$ | async">
      <nav class="sidebar-nav">
        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
            class="nav-item"
            [title]="item.label"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        }
      </nav>
    </aside>
  `,
  styles: `
    .sidebar {
      position: fixed;
      top: 56px;
      left: 0;
      bottom: 0;
      width: 220px;
      background-color: var(--white);
      border-right: 1px solid #e0e0e0;
      transition: width 0.3s ease;
      overflow: hidden;
      z-index: 900;
    }

    .sidebar.collapsed {
      width: 60px;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      padding: 8px 0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      color: #555;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;
      white-space: nowrap;
    }

    .sidebar.collapsed .nav-item {
      justify-content: center;
      padding: 12px 0;
    }

    .nav-item:hover {
      background-color: rgba(26, 58, 143, 0.08);
      color: var(--primary);
    }

    .nav-item.active {
      background-color: var(--primary);
      color: var(--white);
    }

    .nav-icon {
      width: 24px;
      min-width: 24px;
      text-align: center;
      font-size: 18px;
    }

    .nav-label {
      overflow: hidden;
      transition: opacity 0.2s ease;
    }

    .sidebar.collapsed .nav-label {
      opacity: 0;
      width: 0;
      display: none;
    }
  `,
})
export class SidebarComponent {
  protected readonly sidebarService = inject(SidebarService);

  readonly navItems: NavItem[] = [
    { label: 'Requisition Form', route: '/form', icon: '📋' },
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'View', route: '/view', icon: '👁️' },
    { label: 'Equipment Details', route: '/equipment-details', icon: '✅' },
    { label: 'Observations', route: '/observations', icon: '🔍' },
    { label: 'Motor Details', route: '/motor-details', icon: '🔧' },
    { label: 'Notifications', route: '/notifications', icon: '🔔' },
    { label: 'Contact Us', route: '/contact', icon: '📞' },
    { label: 'Help', route: '/help', icon: '❓' },
  ];
}