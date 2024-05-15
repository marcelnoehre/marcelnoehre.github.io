import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  public grid = this._data.grid;

  constructor(private _data: DataService) {
    
  }

  redirect(url: string): void {
    window.open(url, '_blank');
  }
}
