import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})

export class ServerComponent {
  serverId = Math.floor(Math.random() * 100) + 5;
  serverstatus = 'offline';

  constructor() {
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverstatus;

  }

  async getColor() {
    return this.serverstatus === 'online' ? 'green' : 'red';
  }
}



