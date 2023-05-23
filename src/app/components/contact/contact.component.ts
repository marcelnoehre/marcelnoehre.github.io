import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void {
		this.contactForm = new FormGroup(
			{
        nameFormControl: new FormControl('', { validators: [Validators.required] }),
				emailFormControl: new FormControl('', { validators: [Validators.email] }),
				subjectFormControl: new FormControl('', { validators: [Validators.required] }),
        messageFormControl: new FormControl('', { validators: [Validators.required] })
			}
		);
	}

  get name(): string {
    return this.contactForm.get('nameFormControl')!.value;
  }

  get email(): string {
    return this.contactForm.get('emailFormControl')!.value;
  }

  get subject(): string {
    return this.contactForm.get('subjectFormControl')!.value;
  }

  get message(): string {
    return this.contactForm.get('messageFormControl')!.value;
  }

  sendMail() {
    console.log('name: ', this.name);
    console.log('email: ', this.email);
    console.log('subject: ', this.subject);
    console.log('message: ', this.message);
    //TODO: send mail to me
    //TODO: send automatic answer
    //TODO: reset form
  }
}
