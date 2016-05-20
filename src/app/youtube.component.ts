import { Component } from '@angular/core';
import { MDL } from './shared/MDL';
import { SearchBoxComponent } from './search-box/';
import { SnippetItemComponent } from './snippet-item/';
import {SearchResult} from './shared/';

@Component({
  moduleId: module.id,
  selector: 'youtube-app',
  directives  : [MDL, SearchBoxComponent, SnippetItemComponent],
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css']
})
export class YoutubeAppComponent {
  title = 'Youtube Search';
  results: SearchResult[];

  updateResults(results : SearchResult[]) : void{
  	console.log(results)
	  this.results = results;
  }
}
