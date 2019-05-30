import { ApiService } from './shared/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    movies: Array<any> = [];
    selectedMovie;

    constructor(private _API: ApiService) {
        // this.selectedMovie = { id: -1, title: '', desc: '', year: 0 };
    }

    ngOnInit() {
        // this._API.getMovieData().subscribe(data => {
        //     this.movies = data;
        // },
        //     error => {
        //         console.log(error);
        //     });
    }

    // onMovieClick(id) {
    //     this._API.getMovieOnClick(id).subscribe(data => {
    //         this.selectedMovie = data;
    //     });
    // }

    // updateMovie(movie) {
    //     this._API.updateMovieOnClick(movie).subscribe(data => {
    //         console.log(data);

    //     });
    // }

    // insertMovie() {
    //     this._API.insertMovies(this.selectedMovie).subscribe(data => {
    //         this.movies.push(data);
    //         console.log(data);

    //     });
    // }

    // deleteMovie() {
    //     this._API.deleteMovie(this.selectedMovie.id).subscribe(data => {
    //         console.log(data);

    //     });
    // }
}
