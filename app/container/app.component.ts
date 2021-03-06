import {Component} from 'angular2/core'
 import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {WelcomeComponent} from '../components/home/welcome.component'
import {NavbarComponent} from '../components/navbar/navbar.component'
import {ProductListComponent} from '../components/products/product-list.component'
import {WeatherComponent} from '../components/weather/weather.component'
import {FunctionalComponent} from '../components/learnRx/functional.component'
import {LearnRxComponent} from '../components/learnRx/learnRx.component'
import {WikipediaComponent} from '../components/wikipedia/wikipedia-search.component'
import {ChatComponentApp} from '../components/chat/chat.app'
import {TimerComponent} from '../components/timer/timer.component'
import {ValidationComponent} from '../components/validation/validation.component'
import {CatalogComponent} from '../components/catalog/catalog.component'

@Component({
   selector: 'kb-app',
   template: `
        <app-navbar></app-navbar>
     `,
   styleUrls:['app/container/app.component.css'],
   directives:[ROUTER_DIRECTIVES,
            NavbarComponent,
            WelcomeComponent,
            ProductListComponent,
            WeatherComponent,
            FunctionalComponent,
            LearnRxComponent,
            WikipediaComponent,
            ChatComponentApp,
            TimerComponent,
            ValidationComponent,
            CatalogComponent
            ]       
})

@RouteConfig([
                { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
                { path: '/products', name: 'Products', component: ProductListComponent },
                { path: '/weather', name: 'Weather', component: WeatherComponent },
                { path: '/funcational', name: 'Functional', component:FunctionalComponent},
                { path: '/learnRx', name: 'LearnRx', component:LearnRxComponent},
                { path: '/wikipedia', name: 'Wikipedia', component:WikipediaComponent},
                { path: '/chat', name: 'Chat', component:ChatComponentApp},
                { path: '/timer', name: 'Timer', component:TimerComponent},
                { path: '/validation', name: 'Validation', component:ValidationComponent},
                { path: '/catalog', name: 'Catalog', component:CatalogComponent}
            ])

export class AppComponent{
    pageTitle : string ="Angular 2 knowledgebase"
    //{ path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
}                