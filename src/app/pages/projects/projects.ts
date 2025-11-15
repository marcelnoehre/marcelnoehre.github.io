import { Component } from '@angular/core';
import { Navigation } from '../../components/navigation/navigation';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-projects',
  imports: [Navigation, Contact],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  protected title: string[] = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
}
