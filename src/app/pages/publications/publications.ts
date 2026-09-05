import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '../../services/data';
import { PublicationsItem } from '../../interfaces/publications-item';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-publications',
  styleUrl: './publications.scss',
  templateUrl: './publications.html',
})
export class Publications {
  private readonly data = inject(Data);
  private readonly clipboard = inject(Clipboard);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly item = toSignal<PublicationsItem | null>(this.data.publications(), {
    initialValue: null,
  });

  protected readonly openAbstract = signal<ReadonlySet<string>>(new Set());
  protected readonly openBibtex = signal<ReadonlySet<string>>(new Set());

  toggleAbstract(doi: string): void {
    this.openAbstract.update((open) => toggle(open, doi));
  }

  toggleBibtex(doi: string): void {
    this.openBibtex.update((open) => toggle(open, doi));
  }

  copy(bibtex: string): void {
    const copied = this.clipboard.copy(bibtex);
    this.snackBar.open(copied ? 'Copied to clipboard' : 'Failed to copy', undefined, {
      duration: 2500,
    });
  }
}

function toggle(set: ReadonlySet<string>, value: string): ReadonlySet<string> {
  const next = new Set(set);
  next.has(value) ? next.delete(value) : next.add(value);
  return next;
}
