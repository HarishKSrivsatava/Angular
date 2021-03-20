import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selector as an element
  //selector: '[app-servers]', // selector as an attribute
  // selector : '.app-servers', // selector as an class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName : string = 'DefaultTestServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true},3000)
   }

  ngOnInit(): void {
  }

  onClickServer(){
        return this.serverCreationStatus = 'New server is created now';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
