import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  imports: [],
  templateUrl: './scrollbar.html',
  styleUrl: './scrollbar.scss'
})
export class Scrollbar {

  scrollbarHeight(): string {
    try {
      return (window.scrollY / (document.body.scrollHeight - (window.innerHeight * 0.8))) * 100 + 'vh';
    } catch (err) {
      return '0vh'
    }
  }

}
