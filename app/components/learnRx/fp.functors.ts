export class FunctorSample{
 
    plus1(value){
        return value +1;
    }
 
 
    plus1Call(){
        this.plus1(3); //4
        this.plus1([3,4]); //Breaks
    }
    
    plus1Array(value){
        if (Array.isArray(value)){
            var newArray = [];
            for (let i=0; i< value.length; i++){
                newArray[i] = value[i] +1;
            }
            return newArray;
        }
        return value +1;
    }
    
    
    plus1ArrayCall(){
        this.plus1Array(3); //4
        this.plus1Array([3,4]); //[4,5]
        this.plus1Array('ABC'); //expected 'BCD' but breaks!
    }
    
    plus1Advance(value)
    {
        if (Array.isArray(value)){
            var newArray = [];
            for (let i=0; i< value.length; i++){
                newArray[i] = value[i] +1;
            }
            return newArray;
        }
        if (typeof value === 'string'){
            var chars = value.split('');
            var newCharArray = [];
            for (let i=0; i< chars.length; i++){
                newCharArray[i] = 
                        String.fromCharCode( chars[i].charCodeAt(0) + 1);   
            }
            return newCharArray.join('');
        }
        return value +1;
    }
    
    //Functor
    
    stringFunctor(value,fn){
        var chars = value.split('');
        return chars.map(function(char){
            return String.fromCharCode( fn(char.charCodeAt(0)))  
        }).join('');
    }
    
    minus1(value){
        return value -1;
    }
    
    mapFunctor(){
        [3,4].map(this.plus1); //[4,5]
        this.stringFunctor('ABC', this.plus1) //BCD
        this.stringFunctor('XYZ', this.minus1) //RXY
    }
    
    
}