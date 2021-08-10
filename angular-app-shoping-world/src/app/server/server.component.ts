import {Component} from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls: ['./server.component.css']
    })

export class ServerComponent{

    serverId : number = 10;
    status : string = 'Offline'
    allowNewServer : boolean=true;
    serverCreationStatus : string= "No server created"
    serverName:string

    // constructor(){
    //     setTimeout(() => {this.allowNewServer = true}, 3000)
    // }
    getServerStatus (){
        return this.status;
            }
    onClickServer(){
        this.serverCreationStatus="Server Created Now"
    }
}