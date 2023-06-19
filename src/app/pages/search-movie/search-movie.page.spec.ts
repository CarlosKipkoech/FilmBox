import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchMoviePage } from './search-movie.page';

describe('SearchMoviePage', () => {
  let component: SearchMoviePage;
  let fixture: ComponentFixture<SearchMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
