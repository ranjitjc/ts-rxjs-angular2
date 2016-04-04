import { bootstrap } from 'angular2/platform/browser';
import {provide}    from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
// Our main component
import { AppComponent } from './container/app.component';

bootstrap(AppComponent,[ROUTER_PROVIDERS,
     provide(LocationStrategy, {useClass:HashLocationStrategy})
    ]);