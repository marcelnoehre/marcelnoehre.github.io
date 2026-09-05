import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../../services/data';
import { CvItem } from '../../interfaces/cv-item';

@Component({
  imports: [MatIconModule],
  selector: 'app-cv',
  styleUrl: './cv.scss',
  templateUrl: './cv.html',
})
export class Cv {
  private readonly data = inject(Data);

  protected readonly cv = toSignal<CvItem | null>(this.data.cv(), { initialValue: null });
}
