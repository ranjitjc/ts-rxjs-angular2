import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HelpCardDirective} from '../../directives/help-card.directive'


@Component({
    selector: 'note-component',
    template: `
    <div id='note' class="navbar navbar-default navbar-fixed-bottom" style="height:50px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="pull-left">{{heading}}</h4>
                    <i class='btn-primary btn-circle pull-right'><span help-card class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></i>
                <div>
            </div>
            <div class="row">
                <div class="col-md-12" [innerHTML]="detail" ></div>
            </div>
        </div>
    </div>

    `,
    styleUrls:['app/components/notes/notes.css'],
  directives:[
        HelpCardDirective
        
    ],
   
})

export class NotesComponent {
    @Input()
    heading:string;
    
    @Input()
    detail:string;

    constructor(params:RouteParams){
        this.heading = "Help: Home "
        this.detail="Home uses following Techologies."
    }
}