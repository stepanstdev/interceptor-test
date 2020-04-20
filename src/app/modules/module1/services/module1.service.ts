import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module1Service {

  constructor(private readonly http: HttpClient) { }

  public makeRequest(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
