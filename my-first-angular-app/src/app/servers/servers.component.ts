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
  isServerCreated : boolean = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true},3000)
   }

  ngOnInit(): void {
  }

  onClickServer(){
        this.isServerCreated = true;
        this.servers.push(this.serverName);
        return this.serverCreationStatus = 'New server is created now';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
