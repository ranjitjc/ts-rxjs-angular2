import { Component, OnInit } from 'angular2/core';
import * as __ from 'lodash';

export class FPComponent  {
    
    outputHtml :string;
    public curryOutput:string;
    
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
    
    
    dragon = (name, size, element) =>
        name + 'is a ' + size + ' dragon that breathes ' + element + '!';
    
    
    public noncurry():string {
        console.log(this.dragon('fluffy', 'tiny', 'lightning'));    
        return  this.dragon('fluffy', 'tiny', 'lightning');
    }
    
    dragonCurry =
        name=> 
            size =>
                element=>
                    name + 'is a ' + size + ' dragon that breathes ' + element + '!';
    
    curry():string{
        
        let result1 = this.dragonCurry('fluffy')('tiny')('lightning');
        
        let fluffyDragon = this.dragonCurry('fluffy');
        let makeItTiny  =  fluffyDragon('tiny');        
        return makeItTiny('lightning');
    }
    
    nonCurryToCurry():string {
        this.dragon = __.curry(this.dragon) 
        
        let fluffyDragon = this.dragon('fluffy');
        let makeItTiny  =  fluffyDragon('tiny');        
        return makeItTiny('lightning');
        
    }
    
    
    
}

export interface IDragon
{
    name:string;
    element:string;
}

export class SampleCurry{
    
    dragons : Array<IDragon> = [
      {name: 'fluffy' , element : 'lightning' },
      {name: 'noomi' , element : 'lightning' },
      {name: 'karo' , element : 'fire' },
      {name: 'doomer' , element : 'timewrap' },  
        
    ];
    
    filterSample():Array<IDragon> {   
        let hasElement = 
            (element, obj) => obj.element === element;
            
        return  this.dragons.filter(x=> hasElement('lightning', x));
            
    }
    
    //Curry
    filterCurrySample():Array<IDragon> {    
        let hasElement1 = 
            __.curry((element, obj) => obj.element === element);
            
        return this.dragons.filter(hasElement1('lightning'));
           
    }
    
}

export class Reccurssion
{
    categories = [
        {id : 'animals', parent:null},
        {id : 'mammals', parent:'animals'},
        {id : 'cats', parent:'mammals'},
        {id : 'dogs', parent:'mammals'},   
        {id : 'persian', parent:'cats'},
        {id : 'siamese', parent:'cats'},
        {id : 'chihuahua', parent:'dogs'},
        {id : 'labrador', parent:'dogs'}
    ];
    
    
    makeTree = (categories, parent) => {
        let node = {}
        categories
            .filter( c => c.parent === parent)
            .forEach( c=>
                node[c.id] = this.makeTree(categories, c.id));
        return node;    
    }
    
    buildTree(){
        return JSON.stringify(this.makeTree(this.categories, null));    
    }
}


export class log{
    write(text:string){
        return '<div>${text}</div>';
    }
}