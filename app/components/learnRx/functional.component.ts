import { Component , OnInit } from 'angular2/core';
//import {WelcomeComponent} from '../[home]/[welcome].component'
import {FPComponent, SampleCurry, IDragon, Reccurssion} from './fp.component'
import {loadImageCallback, loadImagePromise} from './load-image-callback'


@Component({
    selector:'kb-fb',
    templateUrl: 'app/components/learnRx/functional.component.html',
    directives:[]
})

export class FunctionalComponent implements OnInit {
    
    outputHtml:string="";
    outputHtml1:string="";
    curryOutput:string;
    
    ngOnInit()
    {
        this.foreachSample();
        let fp = new FPComponent();
       // this.curryOutput =fp.noncurry();
       // this.curryOutput =fp.curry();
       // this.curryOutput =fp.nonCurryToCurry();
        
        let curry =new SampleCurry();
        let filtered = curry.filterCurrySample()
                            .map( x => ` <li>${x.name}</li>`)				//map the results to list tag
				            .join('\n');									//join the newline character for every result

        this.curryOutput = `<ul> 
	                        ${filtered}
	                        </ul>`;
    
        let rec = new Reccurssion();
        this.curryOutput = rec.buildTree();
    
    }
    
    foreachSample() {
        var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
        

        for(let counter = 0; counter < names.length; counter++) {
            //this.log(names[counter]);
            this.outputHtml += '<div>' + names[counter] + ' </div>';
        }
        //same as
        var names1 = ["Ben", "Jafar", "Matt", "Priya", "Brian"]
        let nam ="";
        names1.forEach(function(n) {
            console.log(n);
           nam= '<div>' + n + ' </div>';
        });
        this.outputHtml1 += nam;
        
        
        var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

        var result = source
        .map(x => parseInt(x))
        .filter(x => !isNaN(x))
        .reduce((x, y) => x + y);

        console.log(result);
    }
    
    addImg = (src) => {
        let imgElement = document.createElement("img");
        imgElement.src = src;
        document.body.appendChild(imgElement);    
    }
    
    promiseSamples(){
        let cb = new loadImageCallback();
        
        cb.loadImage('images/cat1.jpg', (error, img1) => {
            if (error) throw error;
            this.addImg(img1.src);
            cb.loadImage('images/cat2.jpg', (error, img2) => {
                if (error) throw error;
                this.addImg(img2.src);
                cb.loadImage('images/cat3.jpg', (error, img3) => {
                    if (error) throw error;
                    this.addImg(img3.src);
                    
                });
            }); 
        });
        
        
        let pro = new loadImagePromise();
        
        
        pro.loadImage('images/cat1.jpg').then( (img1) => {
            this.addImg(img1.src);
            pro.loadImage('images/cat2.jpg').then( (img2) => {
                this.addImg(img2.src);
                pro.loadImage('images/cat3.jpg').then( (img3) => {
                    this.addImg(img3.src);
                    
                });
            });
        });
        
        
        Promise.all([
            pro.loadImage('images/cat1.jpg'),
            pro.loadImage('images/cat2.jpg'),
            pro.loadImage('images/cat3.jpg')   
        ]).then( (images) => {
            images.forEach( img => this.addImg(img.src));
        }).catch( (error) => {
          //handle error  
        });
         
        
        
    }
    
    
    
    
    
    log(text:string){
        this.outputHtml += '<div>' + text + ' </div>';
    }
    
}

