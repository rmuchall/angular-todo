import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css'],
  host: {
    class: "flex flex-grow flex-col items-center"
  }
})
export class PublicHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
