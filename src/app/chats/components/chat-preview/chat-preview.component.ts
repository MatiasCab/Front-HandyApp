import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss']
})
export class ChatPreviewComponent {

  @Input() title?: string;
  @Input() name?: string;
  @Input() image?: string;
  @Input() timestring?: string;

  constructor() {
   }

  sample(array: string[]): string{
    return array[Math.floor(Math.random() * array.length)];
  }

  ngOnInit(): void {
    var opciones = ["Enviado", "Recibido", "Leido"];
    var hora = Math.floor(Math.random() * (12 - 1) + 1);
    var minuto = Math.floor(Math.random() * (60 - 1) + 1);
    var ampm = this.sample(["AM", "PM"]);
    var opcion = this.sample(opciones);
    this.timestring = `${opcion} ${hora}:${minuto} ${ampm}`;
  }
}
