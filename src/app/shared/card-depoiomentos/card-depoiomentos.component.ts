import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoiomentos',
  templateUrl: './card-depoiomentos.component.html',
  styleUrls: ['./card-depoiomentos.component.scss']
})
export class CardDepoiomentosComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
