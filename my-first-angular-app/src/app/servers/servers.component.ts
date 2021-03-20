import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selector as an element
  //selector: '[app-servers]', // selector as an attribute
  // selector : '.app-servers', // selector as an class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
