import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss']
})
export class StartingPageComponent implements OnInit {
  scrolled: boolean = false;
  responsiveClass!: string;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.scrolled = true;
  }
  

  constructor(private _breakpoint: BreakpointService) {}

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass: string) => {
      console.log(responsiveClass);
      this.responsiveClass = responsiveClass;
    });
  }
}
