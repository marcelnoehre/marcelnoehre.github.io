import { Injectable } from '@angular/core';
import { StorageService } from './storage';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _DARK_MODE = 'dark-mode';

  constructor(private _storageService: StorageService) {
    const session = _storageService.getLocalEntry(this._DARK_MODE);
    this.setDarkMode(session ? session === 'true' : (window.matchMedia('(prefers-color-scheme: dark)').matches));
  }

  setDarkMode(isDark: boolean) {
    if (isDark) {
      document.body.classList.add(this._DARK_MODE);
      this._storageService.setLocalEntry(this._DARK_MODE, true);
      localStorage.setItem(this._DARK_MODE, 'true');
    } else {
      document.body.classList.remove(this._DARK_MODE);
      this._storageService.setLocalEntry(this._DARK_MODE, false);
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!document.body.classList.contains(this._DARK_MODE));
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this._DARK_MODE);
  }
}