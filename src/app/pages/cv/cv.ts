import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { ExperienceItem } from '../../interfaces/experience-item';
import { EducationItem } from '../../interfaces/education-item';
import { MatIconModule } from '@angular/material/icon';
import { Navigation } from '../../components/navigation/navigation';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-cv',
  imports: [MatIconModule, Navigation, Contact],
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class Cv implements OnInit {
  protected cv: string[] = ['C', 'u', 'r', 'r', 'i', 'c', 'u', 'l', 'u', 'm', '&nbsp', 'V', 'i', 't', 'a', 'e'];
  protected experience: ExperienceItem[] = [];
  protected education: EducationItem[] = [];

  constructor(private _data: Data) {}

  ngOnInit() {
    this.experience = this._data.experience;
    this.education = this._data.education;
    window.scrollTo(0, 0);
  }
}
