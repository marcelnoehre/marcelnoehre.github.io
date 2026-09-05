import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Publications } from './publications';

describe('Publications', () => {
  let component: Publications;
  let fixture: ComponentFixture<Publications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publications],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Publications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
