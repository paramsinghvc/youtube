"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var index_1 = require('./index');
exports.YOUTUBE_API_KEY = 'AIzaSyBiad0BKYHjoLLCj5FDxhuUrWdyLA2SrS8';
exports.YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var YoutubeDataService = (function () {
    function YoutubeDataService(apiKey, apiUrl, http) {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
        this.http = http;
    }
    YoutubeDataService.prototype.search = function (q) {
        var query = [("q=" + q),
            ("key=" + this.apiKey),
            "part=snippet",
            "type=video",
            "maxResults=10"].join('&');
        var queryUrl = this.apiUrl + "?" + query;
        return this.http.get(queryUrl)
            .map(function (res) {
            return res.json().items.map(function (item) {
                return new index_1.SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YoutubeDataService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(exports.YOUTUBE_API_KEY)),
        __param(1, core_1.Inject(exports.YOUTUBE_API_URL)), 
        __metadata('design:paramtypes', [String, String, http_1.Http])
    ], YoutubeDataService);
    return YoutubeDataService;
}());
exports.YoutubeDataService = YoutubeDataService;
exports.youtubeDataServiceInjectables = [
    core_1.bind(YoutubeDataService).toClass(YoutubeDataService),
    core_1.bind(exports.YOUTUBE_API_KEY).toValue(exports.YOUTUBE_API_KEY),
    core_1.bind(exports.YOUTUBE_API_URL).toValue(exports.YOUTUBE_API_URL)
];
//# sourceMappingURL=/Users/param/Documents/code/Youtube/tmp/broccoli_type_script_compiler-input_base_path-TvmzazJH.tmp/0/app/shared/youtube-data.service.js.map