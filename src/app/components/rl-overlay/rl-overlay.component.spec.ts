import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLOverlayComponent } from './rl-overlay.component';

describe('RlOverlayComponent', () => {
  let component: RLOverlayComponent;
  let fixture: ComponentFixture<RLOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RLOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RLOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
