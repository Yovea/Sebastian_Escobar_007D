import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { GatosService } from 'src/app/services/gatos.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
})
export class GatosPage implements OnInit {

  noticias: Article[] = []

  constructor(private gatosService: GatosService) { }

  ngOnInit() {
    this.gatosService.gatosAdop().subscribe(resp=>{
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
  }

}
