import { Component, HostListener, OnInit } from '@angular/core';
import TagCloud from 'tagcloud';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { ScreenDirective } from '../../directives/screen.directive';
import { ContactComponent } from '../../components/shared/contact/contact.component';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [ToolbarComponent, ScreenDirective, ContactComponent, ScrollbarComponent],
  providers: [ScreenDirective],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss'
})
export class TechstackComponent implements OnInit {
  public screenWidth: number = 0;
  public screenHeight: number = 0;
  public scrollY: number = 0;
  public container = '.tagcloud';
  public texts = ['Angular', 'HTML', 'SCSS', 'TypeScript', 'JavaScript', 'Java', 'Python', 'C++', 'Clojure', 'C', 'Prolog', 'Lisp', 'Flutter', 'Dart', 'R'];
  public options = {
    radius: Math.min(window.innerWidth, window.innerHeight) / 2,
    initSpeed: Math.min(window.innerWidth, window.innerHeight) > 576 ? 'fast' : 'normal',
    maxSpeed: Math.min(window.innerWidth, window.innerHeight) > 576 ? 'fast' : 'normal'
  };
  public tagCloud: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateRadius();
    this.tagCloud.destroy()
    this.tagCloud = TagCloud(this.container, this.texts, this.options);
  }

  ngOnInit(): void {
    this.tagCloud = TagCloud(this.container, this.texts, this.options);
  }

  private updateRadius(): void {
    this.options.radius = Math.min(window.innerWidth, window.innerHeight) / 2;
  }
}
