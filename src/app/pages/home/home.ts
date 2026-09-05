import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../../services/data';
import { HomeItem } from '../../interfaces/home-item';
import { PublicationItem } from '../../interfaces/publication-item';
import { SocialItem } from '../../interfaces/social-item';

@Component({
  imports: [RouterLink, MatButtonModule, MatIconModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly data = inject(Data);

  protected readonly item = toSignal<HomeItem | null>(this.data.home(), { initialValue: null });
  protected readonly selectedPublications = toSignal(this.data.selectedPublications(), {
    initialValue: [] as PublicationItem[],
  });
  protected readonly socials = toSignal(this.data.socials(), {
    initialValue: [] as SocialItem[],
  });
}
