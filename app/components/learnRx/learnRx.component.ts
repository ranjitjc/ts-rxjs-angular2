import { Component , OnInit } from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Component({
    selector:'kb-fb',
    templateUrl: 'app/components/learnRx/learnRx.component.html',
    directives:[]
})

export class LearnRxComponent implements OnInit {
    
    outputHtml:string="";
    bufferHtml:string="";
    observerHtml:string="";
    
    observable = Observable.create(function subscribe(observer) {
        var id = setInterval(() => {
            observer.next(' hi')
        }, 1000);
        });
        
    subscription ;
    observableStart(){
        this.subscription =this.observable.subscribe(x => {console.log(x); this.observerHtml += x});
    }
    observableStop(){
        
        this.subscription.unsubscribe();
    }
    
    
    ngOnInit(){
        this. mapSample();
    }
    
    
    
    
    mapSample(){

        //Create an observable that emits a value every second
        const myInterval = Observable.interval(1000);
        //Create an observable that emits every time document is clicked
        const bufferBy = Observable.fromEvent(document, 'click');
        /*
        Collect all values emitted by our interval observable until we click document. This will cause the bufferBy Observable to emit a value, satisfying the buffer. Pass us all collected values since last buffer as an array.
        */
        const myBufferedInterval = myInterval.buffer(bufferBy);
        //Print values to console
        //ex. output: [1,2,3] ... [4,5,6,7,8]
        const subscribe = myBufferedInterval.subscribe(val => {
            console.log(' Buffered Values:', val);
            this.bufferHtml += ' ' + val;
        });

        // var source = Observable. 
        //     .interval(400).take(9)
        //     .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

        // // TODO: Create an Observable `result` that emits the 
        // // sum of all numbers in source. Use pure functions
        // // such as map, filter, reduce, scan, merge, delay, 
        // // concat, take, etc.
        // var result = source
        //     .map(x => parseInt(x))
        //     .filter(x => !isNaN(x))
        //     .scan((x, y) => x + y);

        // result.subscribe(x => console.log(x));

        
         var name$ = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
         //var shortLowerCaseName$ = new Observable<string>(name$)
        //     .map(name => name.toLowerCase())
        //     .filter(name => name.length < 5);
            
        // shortLowerCaseName$.subscribe(name => console.log(x));            
    }
}