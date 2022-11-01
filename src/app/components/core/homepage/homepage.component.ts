import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  scrolled: boolean = false;
  responsiveClass!: string;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.scrolled = true;
  }

  constructor(
    private _breakpoint: BreakpointService
  ) {

  }

  ngOnInit(): void {
      this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
        this.responsiveClass = responsiveClass;
      });
  }

}