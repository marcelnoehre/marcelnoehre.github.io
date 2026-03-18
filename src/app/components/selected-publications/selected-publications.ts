import { Component } from '@angular/core';
import { PublicationItem } from '../../interfaces/publications-item';
import { Data } from '../../services/data';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-publications',
  imports: [MatButtonModule],
  templateUrl: './selected-publications.html',
  styleUrl: './selected-publications.scss'
})
export class SelectedPublications {
  protected publications: PublicationItem[] = [];

  constructor(
    private _router: Router,
    private _data: Data
  ) {}
  
  ngOnInit(): void {
    this.publications = this._data.publications
  }

  redirect(): void {
    this._router.navigate(['/publications']).then(() => {
      window.scrollTo(0, 0)
    });
  }
}
