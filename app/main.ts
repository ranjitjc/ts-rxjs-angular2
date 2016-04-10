import { bootstrap } from 'angular2/platform/browser';
import {provide}    from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {JSONP_PROVIDERS,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


// Our main component
import { AppComponent } from './container/app.component';
import {WikipediaService} from './services/wikipedia/wikipedia-service'
import {CatalogService} from './services/catalog/catalog-service'
import {ChatService} from './services/chat/chat-service'

bootstrap(AppComponent,
    [
        ROUTER_PROVIDERS,
        WikipediaService, 
        CatalogService,
        ChatService,
        JSONP_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass:HashLocationStrategy})
    ]
).catch(err => console.error(err));