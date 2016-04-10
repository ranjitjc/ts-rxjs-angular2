import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ChatService} from '../../services/chat/chat-service';

@Component({
  selector: 'chat-component',
  template: `
    <div class="well">
        <h2>Chat </h2>
        <div *ngFor="#elem of myArray">{{ elem }}</div>
        <div class="form-inline">
            <div class="form-group">
                <input type="text" class="form-control" [(ngModel)]='message'>
                <button type="button" class="btn btn-primary" (click)="send()">Send</button>
            </div>
        </div>
    </div>
  `
})
export class ChatComponent {
  private myArray: Array<string> = new Array<string>();
  message:string;
  constructor(private _myService: ChatService) { }
  
  ngOnInit() {
    this._myService.collection$.subscribe(latestCollection => {
      this.myArray = latestCollection;
    });
    
    this._myService.load();
  }
  
  send()
  {
      this._myService.add(this.message);
      this.message ="";
  }
}
