import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NycTaxiAnalysisComponent } from './nyc-taxi-analysis.component';

describe('NycTaxiAnalysisComponent', () => {
  let component: NycTaxiAnalysisComponent;
  let fixture: ComponentFixture<NycTaxiAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NycTaxiAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NycTaxiAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
