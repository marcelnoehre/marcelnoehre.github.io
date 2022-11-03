import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlOverlayComponent } from './rl-overlay.component';

describe('RlOverlayComponent', () => {
  let component: RlOverlayComponent;
  let fixture: ComponentFixture<RlOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RlOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
