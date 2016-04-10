//our root app component
import {  Component,  OnInit} from 'angular2/core';
import {  FORM_DIRECTIVES,  ControlGroup,  ControlArray,  Control,  Validators,  NgFor } from 'angular2/common';

@Component({
  selector: 'kb-val-group',
  providers: [],
  directives: [
    FORM_DIRECTIVES,
    NgFor
  ],
  templateUrl:'app/components/validation/validation.component.html'
})
export class ValidationComponent {
  
  myForm: ControlGroup;
  itemsControlArray: ControlArray;
  
  constructor() {
    this.myForm = this.generateFormControls();
    this.addNewItem();
    
  }
  
  addNewItem() {
    const item = new ControlGroup({
      'descriptionControl': new Control(
          '',
          Validators.required
        ),
      'quantityControl': new Control(
          '',
          Validators.required
        )
    });
    this.itemsControlArray.push(item);
  }
  
  generateFormControls() {
    const myForm = new ControlGroup({});
    // create headers 
    const headerGroup = new ControlGroup({});
    headerGroup.addControl('acceptControl', new Control());
    headerGroup.addControl('yearControl', new Control());
    headerGroup.addControl('nameControl', new Control());
    myForm.addControl('headerGroup', headerGroup);
    // create body 
    const bodyGroup = new ControlGroup({});
    bodyGroup.addControl('titleControl', new Control());
    this.itemsControlArray = new ControlArray([]);
    bodyGroup.addControl('bodyItemsArray', this.itemsControlArray);
    myForm.addControl('bodyGroup', bodyGroup);
    // create footer 
    const footerGroup = new ControlGroup({});
    footerGroup.addControl('totalControl', new Control());
    footerGroup.addControl('urgentControl', new Control());
    myForm.addControl('footerGroup', footerGroup);
    return myForm;
  }
  
  stringify(obj: any) {
    return JSON.stringify(obj, null, 2);
  }
  
}