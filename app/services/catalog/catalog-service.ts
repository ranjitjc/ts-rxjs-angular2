import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CatalogService {

  constructor(private http:Http) { }

  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('/app/services/dat/food.json').map((res:Response) => res.json());
  }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/services/data/books.json').map((res:Response) => res.json()),
      this.http.get('/app/services/data/movies.json').map((res:Response) => res.json())
    );
  }

}