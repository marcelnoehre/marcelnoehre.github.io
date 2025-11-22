import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../components/navigation/navigation';
import { Contact } from '../../components/contact/contact';
import { Data } from '../../services/data';
import { ProjectItem } from '../../interfaces/project-item';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [Navigation, Contact, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  protected title: string[] = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  protected projects: ProjectItem[] = [];

  constructor(private _data: Data) { }

  ngOnInit() {
    this.projects = this._data.projects;
    window.scrollTo(0, 0);
  }

}
