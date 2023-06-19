import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatestMoviesPage } from './latest-movies.page';

describe('LatestMoviesPage', () => {
  let component: LatestMoviesPage;
  let fixture: ComponentFixture<LatestMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LatestMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
