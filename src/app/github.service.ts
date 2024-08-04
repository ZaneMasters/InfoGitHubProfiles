import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl: string = 'https://api.github.com/search/users';

  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${query}`);
  }
}
