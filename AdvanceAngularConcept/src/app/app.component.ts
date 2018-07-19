import {Component, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  constructor(private cdr: ChangeDetectorRef) {}

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
    this.cdr.detach();
  }

  onChangeinsideBox() {
    this.serverElements[0].content = 'I have been clicked';
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 2000);
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
