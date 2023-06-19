import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestMoviePage } from './suggest-movie.page';

describe('SuggestMoviePage', () => {
  let component: SuggestMoviePage;
  let fixture: ComponentFixture<SuggestMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuggestMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
