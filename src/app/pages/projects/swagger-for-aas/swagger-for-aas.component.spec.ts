import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerForAasComponent } from './swagger-for-aas.component';

describe('SwaggerForAasComponent', () => {
  let component: SwaggerForAasComponent;
  let fixture: ComponentFixture<SwaggerForAasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaggerForAasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwaggerForAasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
