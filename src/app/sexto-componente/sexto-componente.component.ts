import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto-componente',
  standalone: true,
  imports: [],
  templateUrl: './sexto-componente.component.html',
  styleUrl: './sexto-componente.component.css'
})
export class SextoComponenteComponent {


  imagem: string = "matrixd.jpg"


  alterarImagem(){
    if(this.imagem === 'matrixd.jpg'){
      this.imagem='noite.jpg';
    }else(this.imagem = 'matrixd.jpg')  }

}
