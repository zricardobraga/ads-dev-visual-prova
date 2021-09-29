import { Component, OnInit } from "@angular/core";
import { Musica } from "src/app/models/musica";
import { MusicaService } from "src/app/services/musica.service";

@Component({
    selector: "app-list-musica",
    templateUrl: "./list-musica.component.html",
    styleUrls: ["./list-musica.component.css"],
})
export class ListMusicaComponent implements OnInit {

    musicas: Musica[] = [];

    constructor(private service: MusicaService) { }

    ngOnInit(): void {
        this.service.list().subscribe((musicas) => {
            this.musicas = musicas;
            console.log("Teste");
        });

    }

}
