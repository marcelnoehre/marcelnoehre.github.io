import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private email: string = 'marcel.noehre@icloud.com'

  sendEmail(): void {
      window.location.href = 'mailto:' + this.email;
  }
}
