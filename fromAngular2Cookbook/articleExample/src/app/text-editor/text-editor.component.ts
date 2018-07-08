import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {

  @Output() countUpdate = new EventEmitter<number>();

  emitWordCount(e: Event): void {
    this.countUpdate.emit(
      ((<HTMLTextAreaElement>e.target).value.match(/\S+/g) || []).length);
  }

}
