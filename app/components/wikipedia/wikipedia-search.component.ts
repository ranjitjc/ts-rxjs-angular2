import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control} from 'angular2/common';

import {WikipediaService} from '../../services/wikipedia/wikipedia-service'
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

import {CatalogComponent} from '../catalog/catalog.component';

@Component({
  template: `
    <div class="row">
        <div class="col-md-5  well">
            <h2>Wikipedia Promise Search</h2>
            <input #term type="text" (keyup)="search(term.value)">
            <ul>
                <li *ngFor="#item of items">{{item}}</li>
            </ul>
        </div>
        <div class="col-md-5 col-md-offset-2 well">
            <h2>Wikipedia Rx Search</h2>
            <input type="text" [ngFormControl]="termRx"/>
            <ul>
                <li *ngFor="#item of itemsRx | async">{{item}}</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <catalog-component></catalog-component>
    </div>
  `,
  directives:[CatalogComponent]
})
export class WikipediaComponent {
    
    itemsRx: Observable<Array<string>>;
    termRx = new Control();
  
    items: Array<string>;
    constructor(private wikipediaService: WikipediaService) {
            this.itemsRx = this.termRx.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.wikipediaService.search(term));
    }

    search (term) {
        this.wikipediaService.search(term).then(items => this.items = items);
    }
}




