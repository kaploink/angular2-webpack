import { Component, OnInit } from '@angular/core';

const _s = require('./about.component.local.scss');
//const _s = {a: 1, b: 2};

console.log(_s);

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
//  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  _s = _s;

  constructor() {
    // Do stuff
    //debugger;
  }

  ngOnInit() {
    console.log('Hello About');
  }
}
