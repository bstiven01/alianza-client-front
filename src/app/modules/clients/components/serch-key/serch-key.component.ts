import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serch-key',
  templateUrl: './serch-key.component.html',
  styleUrls: ['./serch-key.component.scss']
})
export class SerchKeyComponent  {

  @Output()
  search = new EventEmitter<string>();

  text!: string;

  constructor() { }

  searchFilter() {
    this.search.emit(this.text);
  }

}
