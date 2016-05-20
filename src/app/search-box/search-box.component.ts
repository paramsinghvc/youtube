import { Component, OnInit, ElementRef, EventEmitter, Inject } from '@angular/core';
import { YoutubeDataService } from '../shared/youtube-data.service';
import { SearchResult } from '../shared/';
import  {Observable} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  outputs : ['loading', 'results'],
  selector: 'app-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(private el : ElementRef, @Inject(YoutubeDataService) public youtube : YoutubeDataService) {}

	ngOnInit() {
		Observable.fromEvent(this.el.nativeElement, 'keyup')
				.map((e : any) => e.target.value)
				.filter((q : string) => q.length > 1)
				.debounceTime(250)
				.do(() => this.loading.next(true))
				.map((q : string) => this.youtube.search(q))
				.switch()
				.subscribe((res : SearchResult[]) => {
					this.loading.next(false);
					this.results.next(res)
				}, (err : any) => {
					console.log(err)
					this.loading.next(false);
				}, () => {
					this.loading.next(false);
				})
	}

}
