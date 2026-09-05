import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Repositories } from './repositories';

describe('Repositories', () => {
  let component: Repositories;
  let fixture: ComponentFixture<Repositories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repositories],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Repositories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
