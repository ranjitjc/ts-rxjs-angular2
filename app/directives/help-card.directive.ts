import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector:'[help-card]',
    host:{
        '(click)':'onClick()',
    }
})
export class HelpCardDirective{
    constructor(private element:ElementRef,private renderer :Renderer){
        
    }
    
    onClick(){
        let classList  = this.element.nativeElement.classList;
        //console.log(classList);
        //console.log(classList.contains('glyphicon-triangle-bottom') )
        if (classList.contains('glyphicon-triangle-top'))  {
            document.getElementById('note').style.height = '400px';
            classList.add('glyphicon-triangle-bottom')
            classList.remove('glyphicon-triangle-top')
        }
        else{
            document.getElementById('note').style.height = '50px';
            classList.add('glyphicon-triangle-top')
            classList.remove('glyphicon-triangle-bottom')
        }
    }
    
}