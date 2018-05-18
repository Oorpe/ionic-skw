import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ObjectEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'object-editor',
  templateUrl: 'object-editor.html'
})
export class ObjectEditorComponent {

    _targetObject:any = {};
    keys: any = [];

    @Input("target")
    set targetObject(obj){
        console.log("target acquired", obj)
        this._targetObject = obj || {};
        this.keys = Object.keys(obj) || [];
    }
    get targetObject(){
        return this._targetObject;
    }


    @Output("changed") output = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello ObjectEditorComponent Component');
    this.text = 'objecteditor';
  }



}
