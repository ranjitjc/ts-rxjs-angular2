import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/components/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}