import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quotes:any[] = [
    {id:1, name:'The world as we have created it is a process of our thinking.'},
    {id:2,name:'Yesterday I was clevr,so I wanted to change the world.'},
    {id:3,name:'Nothing is so painful to the hman mind as a great and sudden chnage.'},
    {id:4,name:'To say goodbye is to die a little.'},
    {id:5,name:'Life is a series of natural and spontaneous changes.'},
    {id:6,name:'Let reality be reality.'},
    
  ];
}