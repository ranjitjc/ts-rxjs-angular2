import { Component, OnInit } from 'angular2/core';
import * as io from "socket.io"

@Component({
    selector:'kb-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    directives:[]
})
export class DashboardComponent implements OnInit {
 
    displayCurrentData(data){
        console.log(data.currentCount);
    }
 
 
    ngOnInit(){
        var socket = io();
        // Whenever the server emits 'new message', update the chat body
        socket.on('newData', function (data) {
            this.displayCurrentData(data);
        });
    }
    
    
    
}



