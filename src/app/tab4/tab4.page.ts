import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  texto: string='';

  constructor(private file: File) { }

  guardarTexto() {
    if (!this.texto) {
      console.error('No hay texto para guardar');
      return;
    }

    const fileName='texto.txt';

    this.file.writeFile(this.file.dataDirectory, fileName, this.texto, { replace: true })
      .then(() => {
        console.log('Texto guardado correctamente');
      })
      .catch((error) => {
        console.error('Error al guardar texto', error);
      });
  }
}
