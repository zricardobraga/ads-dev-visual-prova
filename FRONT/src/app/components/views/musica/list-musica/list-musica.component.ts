import { Component, OnInit } from '@angular/core';
import { Musica } from '../../../../models/musica';
import { MusicaService } from '../../../../services/musica.service';

@Component({
  selector: 'app-list-musica',
  template: "./list-musica.component.html",
  styles: ["./list-musica.component.css"],
})
export class ListMusicaComponent implements OnInit {

    musicas: Musica[] = [];

    constructor(private service: MusicaService) { }

    ngOnInit(): void {
        this.service.list().subscribe((musicas) => {
            this.musicas = musicas;
        });

  }

}
