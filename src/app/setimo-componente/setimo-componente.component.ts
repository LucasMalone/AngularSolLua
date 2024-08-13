import { Component } from '@angular/core';

@Component({
  selector: 'app-setimo-componente',
  standalone: true,
  imports: [],
  templateUrl: './setimo-componente.component.html',
  styleUrl: './setimo-componente.component.css'
})
export class SetimoComponenteComponent {

  
  imagem: string = "solgaleo.webp"


  alterarImagem() {
    if (this.imagem === 'solgaleoday.webp') {
        this.imagem = 'lunala.png';
    } else if (this.imagem === 'lunala.png') {
        this.imagem = 'solgaleo.webp'; 
    } else {
        this.imagem = 'solgaleoday.webp';
    }
}

}
