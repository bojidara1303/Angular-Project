import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from 'src/app/types/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news = {} as News;

  constructor(private newsService: NewsService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['newsId'];

      this.newsService.getSingleNews(id).subscribe((news) => {
        this.news = news;
      })
    })
  }
}
