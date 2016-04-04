import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {WelcomeComponent} from '../home/welcome.component'
import {ProductListComponent} from '../products/product-list.component'

@Component({
    selector:'app-navbar',
    templateUrl: 'app/components/navbar/navbar.component.html',
    directives:[ROUTER_DIRECTIVES,
            WelcomeComponent,
            ProductListComponent]
})
export class NavbarComponent {
    
}



