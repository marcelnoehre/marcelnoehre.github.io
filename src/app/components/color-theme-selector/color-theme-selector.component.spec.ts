import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeSelectorComponent } from './color-theme-selector.component';

describe('ColorThemeSelectorComponent', () => {
  let component: ColorThemeSelectorComponent;
  let fixture: ComponentFixture<ColorThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThemeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
