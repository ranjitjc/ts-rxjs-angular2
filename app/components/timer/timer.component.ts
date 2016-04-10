import { Component, OnInit } from 'angular2/core';

//import {[Welcome]Component} from '../[welcome]/[welcome].component'


@Component({
    selector:'kb-timer',
    templateUrl: 'app/components/timer/timer.component.html',
    directives:[]
})
export class TimerComponent implements OnInit{
    timeout = 300;
    
    // counteOption = {
    //         seconds: this.timeout-1,  // number of seconds to count down
    //         onUpdateStatus: function(secs:number){
    //             this.seconds = this.timeout;

    //             var per = ((this.seconds - secs) / this.seconds) ;
                


    //             let min:number =  parseInt( secs / 60 );
    //             let sec:number = parseInt( secs % 60 );


    //             if (c4 != null){
    //                 c4.circleProgress('value', per);
    //                 //$('#clockTime').html(secs);
    //                 //c4.find('strong').html(parseInt(100 * per) + '<i>%</i>' );
    //                 c4.find('strong').html( min + ':' + sec );


    //                 if (secs < ((this.seconds *25)/100) ){
    //                    c4.circleProgress({
    //                         fill: { color: 'red' }
    //                     });
    //                 }else if (secs < ((this.seconds *50)/100) ){
    //                     c4.circleProgress({
    //                         fill: { color: 'orange' }
    //                     });
    //                 }else{
                    
    //                    c4.circleProgress({
    //                         fill: { color: 'green' }
    //                     });
    //                 }
    //             }else
    //             {
    //                 //IE8
    //                 $('#circle').hide();
    //                 $('#clockTime').show();
    //                 $('#clockTime').html( min + ':' + sec );
    //             }

                
    //         }, // callback for each second
    //         onCounterEnd: function(){ 
    //             alert('counter ended!');

    //             //todo: refresh the page 
    //             //window.location = paymentURL;

    //             ////temp: stop the counter
    //             //myCounter.stop();
    //             //delete myCounter;

    //             ////temp: restart the counter
    //             //$('#clockTime').html(xpayTimeoutSecs);
    //             //myCounter = new counter(counteOption );
    //             //myCounter.start();

    //         }
    //     };
        
        
       
            
            
        
        ngOnInit()
        {
            //  var c4 = $('#circle');

            // c4.circleProgress({
            //     size: 50,
            //     startAngle: -Math.PI / 4 * 2,
            //     value: 0,
            //     lineCap: 'round',
            //     fill: { color: 'green' },
            // });
            
            // $('#clockTime').html(xpayTimeoutSecs);
            // myCounter = new counter(counteOption );
            // myCounter.start();
        }
        
        
    public counterValue:number = 0;
    increment() {
        this.counterValue++;
    }
    decrement() {
        this.counterValue--;
    }
}



