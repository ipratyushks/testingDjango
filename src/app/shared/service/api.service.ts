import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    baseUrl: string = 'http://127.0.0.1:8000';
    headers = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getMovieData(): Observable<any> {
        return this.http.get(this.baseUrl + '/movies/', {headers: this.headers});
    }

    getMovieOnClick(id): Observable<any> {
        return this.http.get(this.baseUrl + '/movies/' + id + '/', {headers: this.headers});
    }

    updateMovieOnClick(movie): Observable<any> {
        const body = { title: movie.title, desc: movie.desc, year: movie.year };
        return this.http.put(this.baseUrl + '/movies/' + movie.id + '/', body, {headers: this.headers});
    }

    insertMovies(movie): Observable<any> {
        const body = { title: movie.title, desc: movie.desc, year: movie.year };
        return this.http.post(this.baseUrl + '/movies/', body, {headers: this.headers});
    }

    deleteMovie(id): Observable<any> {
        return this.http.delete(this.baseUrl + '/movies/' + id + '/', {headers: this.headers});
    }
}
