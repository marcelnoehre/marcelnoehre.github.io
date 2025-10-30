import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPublications } from './selected-publications';

describe('SelectedPublications', () => {
  let component: SelectedPublications;
  let fixture: ComponentFixture<SelectedPublications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPublications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPublications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
