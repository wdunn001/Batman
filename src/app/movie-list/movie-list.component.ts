import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  pageTitle: string = 'The Batman';
  showImage: boolean = false;
  movies: Movies[] = [
    {
      movieTitle: 'Batman',
      movieDirector: 'Tim Burton',
      releaseYear: 1989,
      description:
        'Bruce Wayne struggles to handle his demons like an adult and beats up poor people to prove to himself he is a good person',
      starRating: 3.8,
      imageUrl: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
