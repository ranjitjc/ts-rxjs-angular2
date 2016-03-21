import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app/app.component.ts';
//import {AppComponent} from './app/app.component3.ts';

bootstrap(AppComponent, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS
]);
