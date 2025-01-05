import { AfterViewInit, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Contact } from '../../../interfaces/Contact.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;
  public contact: Contact[] = this._data.contact;
  public year: string = new Date().getFullYear().toString();

  constructor(
    private _data: DataService
  ) { }

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  redirect(url: string, target: string): void {
    window.open(url, target);
  }

}
