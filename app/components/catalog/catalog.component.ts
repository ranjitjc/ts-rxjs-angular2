import {Component} from 'angular2/core';
import {CatalogService} from '../../services/catalog/catalog-service'

@Component({
  selector: 'catalog-component',
  template:`
  <div class="well">
    <div class="alert alert-danger">
        <span>{{errorMessage}}</span>
    </div>
    <h3>Angular2 HTTP Demo App</h3>
    <h4>Foods</h4>
    <ul>
        <li *ngFor="#food of foods">{{food.name}}</li>
    </ul>
    <h4>Books and Movies</h4>
    <h5>Books</h5>
    <ul>
        <li *ngFor="#book of books">{{book.title}}</li>
    </ul>
    <h5>Movies</h5>
    <ul>
        <li *ngFor="#movie of movies">{{movie.title}}</li>
    </ul>
  </div>
  <div class="panel">
    <h2>Hello from the {{componentName}}!</h2>
    <div *ngFor="#f of authors" class="alert alert-info">
    <h4> Name : {{f.name}} </h4> <h4>Age: {{f.age}}</h4> 
    </div>
  </div>
  `
})
export class CatalogComponent {

  public foods;
  public books;
  public movies;
  public authors;
  errorMessage:string;
  
  constructor(private _demoService: CatalogService) { }

  ngOnInit() {
    this.getFoods();
    this.getBooksAndMovies();
    this.getAuthors();
    
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.foods = data},
      // the second argument is a function which runs on error
      err => {this.errorMessage = err._body; console.error(err);},
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }
  
  getAuthors() {
    this._demoService.getAuthors().subscribe(
      // the first argument is a function which runs on success
      data => { this.authors = data},
      // the second argument is a function which runs on error
      err => {this.errorMessage = err._body; console.error(err);},
      // the third argument is a function which runs on completion
      () => console.log('done loading authors')
    );
  }
  
  
}