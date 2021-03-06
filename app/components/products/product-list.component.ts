import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {NotesComponent} from '../notes/notes';

// import { IProduct } from './product';
// import { ProductFilterPipe } from './product-filter.pipe';
// import { StarComponent } from '../shared/star.component';
// import { ProductService } from './product.service';

@Component({
    selector:'kb-products',
    templateUrl: 'app/components/products/product-list.component.html'
    // styleUrls: ['app/components/products/product-list.component.css']
    // pipes: [ProductFilterPipe],
    // directives: [StarComponent, ROUTER_DIRECTIVES]
    ,directives:[NotesComponent]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    errorMessage: string;
    products: any[]; // IProduct[];
    helpHeaderText :string;
    helpDetailHtml : string;
    
    constructor(){
       this.products= [{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }]
    }

    // constructor(private _productService: ProductService) {

    // }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this.helpHeaderText = "Help : Product list Component";
        this.helpDetailHtml = `
            <div class="row col-md-12">
                <h4>Technologies:</h4>
                <ul style="margin-left:20px">
                    <li>Custom Directives</li>
                    <li>Provider</li>
                    <li>Child component data dining</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            `;
    //        this._productService.getProducts()
    //                  .subscribe(
    //                    products => this.products = products,
    //                    error =>  this.errorMessage = <any>error); 
    }
    
    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Product List: ' + message;
    // }
}