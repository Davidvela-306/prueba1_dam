import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  texto: string = '';

  constructor(private file: File) {}

  guardarTexto() {
    const fileName = 'texto.txt';
    const filePath = this.file.dataDirectory + fileName;
    this.file.writeExistingFile(this.file.dataDirectory, fileName, this.texto)
      .then(() => {
        console.log('Texto guardado correctamente');
      })
      .catch((error) => {
        console.error('Error al guardar texto', error);
      });
  }
}