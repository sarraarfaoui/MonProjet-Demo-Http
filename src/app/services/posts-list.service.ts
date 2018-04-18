import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../domain/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class PostsListService {
   URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this. _http.get<IPost[]>(this.URL);
   }
}
