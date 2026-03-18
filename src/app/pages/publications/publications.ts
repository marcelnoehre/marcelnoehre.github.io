import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../components/navigation/navigation';
import { Contact } from '../../components/contact/contact';
import { Data } from '../../services/data';
import { PublicationItem } from '../../interfaces/publications-item';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Snackbar } from '../../services/snackbar';

@Component({
  selector: 'app-publications',
  imports: [Navigation, Contact, MatButtonModule, MatIconModule],
  templateUrl: './publications.html',
  styleUrl: './publications.scss'
})
export class Publications implements OnInit {
  protected title: string[] = ['P', 'u', 'b', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's'];
  protected publications: PublicationItem[] = [];
  protected openData: PublicationItem[] = [];
  protected openAbstract = new Set<string>();
  protected openBibtex = new Set<string>();

  constructor(
    private _data: Data,
    private _snackbar: Snackbar
  ) {}
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.publications = this._data.publications
    this.openData = this._data.openData
  }

  redirect(doi: string): void {
    window.open(doi, '_blank');
  }

  toggleAbstract(doi: string) {
    this.openAbstract.has(doi) ? this.openAbstract.delete(doi) : this.openAbstract.add(doi);
  }

  toggleBibtex(doi: string) {
    this.openBibtex.has(doi) ? this.openBibtex.delete(doi) : this.openBibtex.add(doi);
  }

  copy(bibtex: string) {
    navigator.clipboard.writeText(bibtex).then(() => {
      this._snackbar.open('Copied to clipboard');
    }).catch((err) => {
      this._snackbar.open('Failed to copy');
    });
  }
}
