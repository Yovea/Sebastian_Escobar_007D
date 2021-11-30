import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  componentes: Componente[] = [
  {
    icon: 'paw',
    name: 'Gatos en adopción',
    redirecTo: '/pag2'
  },
  {
    icon: 'extension-puzzle',
    name: 'Registro de usuarios',
    redirecTo: '/pag3'
  },
  {
    icon: 'time',
    name: 'Noticias del mundo',
    redirecTo: '/gatos'
  }
]  
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

