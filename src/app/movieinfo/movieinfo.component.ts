import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css'],
})
export class MovieinfoComponent implements OnInit {
  movies: Movies | undefined;
  pageTitle: string = 'The Batman';

  constructor() {}

  ngOnInit(): void {
    this.movies = {
      movieTitle: 'The Batman',
      movieDirector: 'Tim Burton',
      releaseYear: 1989,
      description:
        'Batman uses his fame and influence to maime and degrade poor people',
      starRating: 3.8,
      imageUrl: '#',
    };
  }
}
