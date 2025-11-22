import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../components/navigation/navigation';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-publications',
  imports: [Navigation, Contact],
  templateUrl: './publications.html',
  styleUrl: './publications.scss'
})
export class Publications implements OnInit {
  protected title: string[] = ['P', 'u', 'b', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's'];
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
