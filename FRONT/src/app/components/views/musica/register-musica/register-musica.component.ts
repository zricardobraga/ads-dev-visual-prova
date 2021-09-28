import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { create } from 'domain';
import { Musica } from '../../../../models/musica';
import { MusicaService } from '../../../../services/musica.service';

@Component({
  selector: 'app-register-musica',
  template: "./register-musica.component.ts",
  styles: ["./register-musica.component.css"]
})
export class RegisterMusicaComponent implements OnInit {

    id!: number;
    nome!: string;
    artista!: string;
    album!: string;
    genero!: string;

    constructor(private service: MusicaService, private router: Router) { }

    ngOnInit(): void { }

    create(): void {
        let musica: Musica = {
            id: this.id,
            nome: this.nome,
            artista: this.artista,
            album: this.album,
            genero: this.genero,
        };
        this.service.create(musica).subscribe((musica) => { this.router.navigate(["musica/list"]) }, (error) => { });
    }
}
