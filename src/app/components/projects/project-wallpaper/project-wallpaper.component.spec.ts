import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWallpaperComponent } from './project-wallpaper.component';

describe('ProjectWallpaperComponent', () => {
  let component: ProjectWallpaperComponent;
  let fixture: ComponentFixture<ProjectWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWallpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
