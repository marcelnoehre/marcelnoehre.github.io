import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  scrollDetected: boolean = false;
  scrolled: boolean = false;
  scrollInterval: any;
  responsiveClass!: string;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.scrollDetected = true;
  }

  constructor(
    private _breakpoint: BreakpointService
  ) {

  }

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
      this.responsiveClass = responsiveClass;
    });
    this.handleScroll();
  }

  async handleScroll() {
    await new Promise<void>(done => setTimeout(() => done(), 5000));
    this.scrollInterval = this.scrollDetected ? null : setInterval(() => {
      if (this.scrollDetected) {
        this.scrolled = true;
        clearInterval(this.scrollInterval);
      }
    }, 10000);
  }
}
