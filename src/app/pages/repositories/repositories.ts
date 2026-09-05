import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../../services/data';
import { RepositoriesItem } from '../../interfaces/repositories-item';

@Component({
  imports: [MatIconModule],
  selector: 'app-repositories',
  styleUrl: './repositories.scss',
  templateUrl: './repositories.html',
})
export class Repositories {
  private readonly data = inject(Data);

  protected readonly item = toSignal<RepositoriesItem | null>(this.data.repositories(), {
    initialValue: null,
  });
}
