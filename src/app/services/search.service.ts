import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
  }
}
