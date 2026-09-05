import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Data } from '../../services/data';
import { NavigationItem } from '../../interfaces/navigation-item';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navigation',
  styleUrl: './navigation.scss',
  templateUrl: './navigation.html',
})
export class Navigation {
  private readonly data = inject(Data);

  protected readonly items = toSignal(this.data.navigation(), { initialValue: [] as NavigationItem[] });
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
