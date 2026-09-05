import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { HomeItem } from '../../interfaces/home-item';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly data = inject(Data);

  protected readonly item = toSignal<HomeItem | null>(this.data.home(), { initialValue: null });
}
