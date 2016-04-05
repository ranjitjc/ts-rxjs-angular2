import { Component } from 'angular2/core';

//import {WelcomeComponent} from '../[home]/[welcome].component'


@Component({
    selector:'kb-fb',
    templateUrl: 'app/components/functional.component.html',
    directives:[]
})

export class FunctionalComponent {
    
    outputHtml :string;
    
    function() {
        var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
            counter;

        for(counter = 0; counter < names.length; counter++) {
            console.log(names[counter]);
        }
        //same as
        names.forEach(function(name) {
            console.log(name);
        });
    }
}


export class log{
    write(text:string){
        return '<div>${text}</div>';
    }
}