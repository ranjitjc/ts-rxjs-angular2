import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
   timeout : number = 120;
   
   counter : string ;
   
   constructor(private _formBuilder: FormBuilder, private _http: Http) {
   }
   
   
   myCounter: Observable<string> ;
   subscribe;
   start()
   {
       this.myCounter = new Observable(observer => {
            let count =0;
            let interval = setInterval (() => {
                observer.next(count++);
            }, 1000)
            
            //disposal
            return () => {
                clearInterval(interval);
            }
            
            
        });        
        
        this.subscribe = this.myCounter.subscribe(
            val => {
                this.counter = val;
                console.log(val)
            },
            err => console.log(err),
            () => console.log('done')
        );
              
        
   }
   
   
   stop() {
       this.subscribe.unsubscribe();
   }
   
   
   
   
   
}


