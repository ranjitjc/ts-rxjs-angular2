import { Component } from 'angular2/core';

import {ChatComponent} from './chat.component'


@Component({
    selector:'kb-chat',
    //templateUrl: 'app/components/chat/chat.app.html',
    template:`
        <div class="row">
            <div class="col-md-5">
                <chat-component></chat-component>
            </div>
            <div class="col-md-5">
                <chat-component></chat-component>
            </div>
       </div>
    `,
    directives:[ChatComponent]
})
export class ChatComponentApp {
    
}



