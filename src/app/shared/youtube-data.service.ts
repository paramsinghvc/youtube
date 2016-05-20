import { Injectable, bind, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {SearchResult} from './index';


export var YOUTUBE_API_KEY: string = 'AIzaSyBiad0BKYHjoLLCj5FDxhuUrWdyLA2SrS8';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeDataService {

  constructor(@Inject(YOUTUBE_API_KEY) private apiKey : string, @Inject(YOUTUBE_API_URL) private apiUrl : string, public http : Http) {}

  search(q : string) : Observable<SearchResult[]> {
	
	let query: string = [`q=${q}`,
		  `key=${this.apiKey}`,
		  `part=snippet`,
		  `type=video`,
		  `maxResults=10`].join('&');

	let queryUrl = `${this.apiUrl}?${query}`;	  

  	return this.http.get(queryUrl)
  		.map((res : Response) => {
  			return (<any>res.json()).items.map((item) => {
					return new SearchResult({
						id: item.id.videoId,
						title: item.snippet.title,
						description: item.snippet.description,
						thumbnailUrl: item.snippet.thumbnails.high.url
					});
  			})
  		})
  }
}

export var youtubeDataServiceInjectables : Array<any> = [
	bind(YoutubeDataService).toClass(YoutubeDataService),
	bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
	bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
]