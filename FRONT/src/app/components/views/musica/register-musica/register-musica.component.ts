import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from "src/app/models/musica";
import { MusicaService } from "src/app/services/musica.service";

@Component({
    selector: 'app-register-musica',
    templateUrl: "./register-musica.component.html",
    styleUrls: ["./register-musica.component.css"],
})
export class RegisterMusicaComponent implements OnInit {

    nome!: string;
    artista!: string;
    album!: string;
    genero!: string;

    constructor(private service: MusicaService, private router: Router) { }

    ngOnInit(): void { }

    create(): void {
        let musica: Musica = {
            nome: this.nome,
            artista: this.artista,
            album: this.album,
            genero: this.genero,
        };
        this.service.create(musica).subscribe((musica) => { this.router.navigate(["musica/list"]) },
            (error) => { });
    }
}