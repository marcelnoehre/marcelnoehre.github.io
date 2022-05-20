import { Component, OnInit } from '@angular/core';
import { TimelineSection } from 'src/app/interfaces/timeline-section';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public timelineSections:TimelineSection[] = [
    {
      title: 'TIMELINE.BACHELOR.TITLE',
      date: 'TIMELINE.BACHELOR.DATE',
      content: 'TIMELINE.BACHELOR.CONTENT', 
      company: 'TIMELINE.BACHELOR.COMPANY',
      website: 'https://www.uni-hildesheim.de/studium/studienangebot/bachelorstudium/informationsmanagement-und-informationstechnologie-bachelor-of-science-bsc/#c112615',
      icon: 'icon fas fa-graduation-cap'
    },
    {
      title: 'TIMELINE.YOUCO.TITLE',
      date: 'TIMELINE.YOUCO.DATE',
      content: 'TIMELINE.YOUCO.CONTENT', 
      company: 'TIMELINE.YOUCO.COMPANY',
      website: 'https://youco-it.com/',
      icon: 'icon fas fa-code'
    },
    {
      title: 'TIMELINE.ENTIAC.TITLE',
      date: 'TIMELINE.ENTIAC.DATE',
      content: 'TIMELINE.ENTIAC.CONTENT', 
      company: 'TIMELINE.ENTIAC.COMPANY',
      website: 'https://entiac.com/',
      icon: 'icon fas fa-code'
    },
    {
      title: 'TIMELINE.HIWI.TITLE',
      date: 'TIMELINE.HIWI.DATE',
      content: 'TIMELINE.HIWI.CONTENT', 
      company: 'TIMELINE.HIWI.COMPANY',
      website: 'https://sse.uni-hildesheim.de/studium-lehre/veranstaltungen-aus-frueheren-semestern/programmierung-i-java/',
      icon: 'icon fas fa-person-chalkboard'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
