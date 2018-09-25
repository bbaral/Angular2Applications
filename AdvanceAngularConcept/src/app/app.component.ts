import {Component} from '@angular/core';
import * as Immutable from 'Immutable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  style: {[name: string]: string} = {};
  immutableStyle: Immutable.Map<string[], string> = Immutable.Map<string[], string>();

  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  constructor() {}

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.style['Color'] = 'green';
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
    if (this.serverElements[0].name === 'Changed!') {
      this.immutableStyle.set(this.serverElements[0].name['Color'], 'red');
    }
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
