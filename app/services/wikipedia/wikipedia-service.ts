import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';
 
@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {
    
  }
  
  search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .toPromise()
                .then((response) => response.json()[1]);
  }
  
  
   searchRx (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((response) => response.json()[1]);
                
                                
  }
  
}
