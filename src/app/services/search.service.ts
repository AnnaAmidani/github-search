import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Repo } from '../model/Repo';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private handleError: HandleError;

  private endpoint = environment.searchApi + environment.repoPath;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SearchService');
  }   

  findRepos(query: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.endpoint, {
       params: new HttpParams().set('q', query).set('sort', 'stars').set('order', 'desc') 
      })
      .pipe(
        catchError(this.handleError<Repo[]>('findRepos', []))
      );
  }

}
