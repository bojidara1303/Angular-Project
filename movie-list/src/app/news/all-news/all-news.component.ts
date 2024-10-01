import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/types/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  allNews: News[] | null = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (allNews) => {
        this.allNews = allNews;
      }
    })
  }
}
