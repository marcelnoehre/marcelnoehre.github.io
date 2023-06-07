import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  chatBotItems: string[] = [
    "Question 1",
    "Question 2",
    "Question 3"
  ];
}
