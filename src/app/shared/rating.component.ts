// imports
import {Component, Input, OnInit, OnChanges, Output} from '@angular/core';
import { EventEmitter } from 'events';
// component decorator
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
// Rating - component
export class RatingComponent implements OnInit, OnChanges {
  // variables
  ratingWidth: number;
  @Input() ratingValue: number;
  @Output() ratingClick: EventEmitter;
  // class/component constructor
  constructor() {
    this.ratingClick = new EventEmitter();
  }
  // OnInit.ngOnInit method implementation. Component lifecycle hook
  ngOnInit() {
  }
  // OnChanges.ngOnChanges method implementation. Component lifecycle hook
  ngOnChanges() {
    this.ratingWidth = this.ratingValue * 15;
  }
  // onClick - handler
  onClick(e): void {
    console.log(`Rating ${this.ratingValue} is clicked.`,e);
    this.ratingClick.emit(e);
  }
}
