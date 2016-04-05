import { Component , OnInit } from 'angular2/core';
//import {WelcomeComponent} from '../[home]/[welcome].component'


@Component({
    selector:'kb-fb',
    templateUrl: 'app/components/learnRx/functional.component.html',
    directives:[]
})

export class FunctionalComponent implements OnInit {
    
    outputHtml:string="";
    outputHtml1:string="";
    
    ngOnInit()
    {
        this.foreachSample();
    }
    
    foreachSample() {
        var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
        

        for(let counter = 0; counter < names.length; counter++) {
            //this.log(names[counter]);
            this.outputHtml += '<div>' + names[counter] + ' </div>';
        }
        //same as
        var names1 = ["Ben", "Jafar", "Matt", "Priya", "Brian"]
        let nam ="";
        names1.forEach(function(n) {
            console.log(n);
           nam= '<div>' + n + ' </div>';
        });
        this.outputHtml1 += nam;
        
        
        var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

        var result = source
        .map(x => parseInt(x))
        .filter(x => !isNaN(x))
        .reduce((x, y) => x + y);

        console.log(result);
    }
    
    
    
    
    
    
    
    log(text:string){
        this.outputHtml += '<div>' + text + ' </div>';
    }
    
}

