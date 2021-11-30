import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[  
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

  constructor() {}

}
