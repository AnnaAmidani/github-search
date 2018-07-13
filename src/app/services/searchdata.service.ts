import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery')
  }
}
