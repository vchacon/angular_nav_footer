import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let a: number;
    let b: number;

    a = 3;
    b = 5;
    a = a + b;
    b = a * b;
  }
}
