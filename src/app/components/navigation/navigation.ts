import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';
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
export class Navigation implements AfterViewInit {
  private readonly data = inject(Data);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected readonly items = toSignal(this.data.navigation(), { initialValue: [] as NavigationItem[] });
  protected readonly menuOpen = signal(false);

  ngAfterViewInit(): void {
    const updateHeight = (): void => {
      document.documentElement.style.setProperty('--nav-height', `${this.elementRef.nativeElement.offsetHeight}px`);
    };

    updateHeight();
    new ResizeObserver(updateHeight).observe(this.elementRef.nativeElement);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
