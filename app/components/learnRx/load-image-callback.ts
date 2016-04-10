export class loadImageCallback{ 
    loadImage(url, callback){
        let image = new Image();
        
        image.onload = function(){
            callback(null, image);
        }
        
        image.onerror = function(){
            let msg = 'Could not load image at ' + url;
            callback(new Error(msg));
        }
        
        image.src = url;   
    }
}

export class loadImagePromise{
    loadImage(url){
        return new Promise((resolve, reject) => {
            let image = new Image();
        
            image.onload = function(){
                resolve(image);
            }    
            
            image.onerror = function(){
                let msg = 'Could not load image at ' + url;
                reject(new Error(msg));
            }    
        
            image.src = url;  
                
        });
    }
}