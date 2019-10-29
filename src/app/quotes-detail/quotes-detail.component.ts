import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() Quotes: any;
  @Output() isComplete = new EventEmitter<boolean>();


  QuotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  QuotesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
