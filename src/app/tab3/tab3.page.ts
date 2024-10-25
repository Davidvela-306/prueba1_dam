import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a!: number;
  b!: number;
  c!: number;
  resultado: string='';

  calcularRaices() {
    const discriminante=this.b**2-4*this.a*this.c;
    if (discriminante<0) {
      this.resultado='No hay raíces reales';
    } else if (discriminante===0) {
      const raiz=-this.b/(2*this.a);
      this.resultado=`Raíz: ${raiz}`;
    } else {
      const raiz1=(-this.b+Math.sqrt(discriminante))/(2*this.a);
      const raiz2=(-this.b-Math.sqrt(discriminante))/(2*this.a);
      this.resultado=`Raíces: ${raiz1} y ${raiz2}`;
    }
  }
}