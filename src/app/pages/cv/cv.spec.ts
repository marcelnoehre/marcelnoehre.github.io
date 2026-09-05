import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Cv } from './cv';

describe('Cv', () => {
  let component: Cv;
  let fixture: ComponentFixture<Cv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cv],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Cv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
