import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { News } from '../types/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews() {
    const { newsUrl } = environment;
    return this.http.get<News[]>(`${newsUrl}`);
  }

  getSingleNews(id: string) {
    const { newsUrl } = environment;
    return this.http.get<News>(`${newsUrl}/${id}`)
  }
}
