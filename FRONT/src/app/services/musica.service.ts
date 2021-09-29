import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Musica } from "../models/musica";


@Injectable({
  providedIn: 'root'
})
export class MusicaService {

    private baseURL = "http://localhost:5000/api/musica";

    constructor(private http: HttpClient) { }

    list(): Observable<Musica[]> {
        return this.http.get<Musica[]>(`${this.baseURL}/list`);
    }

    create(musica: Musica): Observable<Musica> {
        return this.http.post<Musica>(`${this.baseURL}/create`, musica);
    }
}
