import { Component } from '@angular/core';
import {SearchResult} from '../shared/';
import {NgStyle} from '@angular/common';

@Component({
  moduleId: module.id,
  inputs : ['result'],
  selector: 'app-snippet-item',
  templateUrl: 'snippet-item.component.html',
  styleUrls: ['snippet-item.component.css']
})
export class SnippetItemComponent {
	result: SearchResult;
}
