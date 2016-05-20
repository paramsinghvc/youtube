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
var youtube_data_service_1 = require('../shared/youtube-data.service');
var Rx_1 = require('rxjs/Rx');
var SearchBoxComponent = (function () {
    function SearchBoxComponent(el, youtube) {
        this.el = el;
        this.youtube = youtube;
        this.loading = new core_1.EventEmitter();
        this.results = new core_1.EventEmitter();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        Rx_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; })
            .filter(function (q) { return q.length > 1; })
            .debounceTime(250)
            .do(function () { return _this.loading.next(true); })
            .map(function (q) { return _this.youtube.search(q); })
            .switch()
            .subscribe(function (res) {
            _this.loading.next(false);
            _this.results.next(res);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            outputs: ['loading', 'results'],
            selector: 'app-search-box',
            templateUrl: 'search-box.component.html',
            styleUrls: ['search-box.component.css']
        }),
        __param(1, core_1.Inject(youtube_data_service_1.YoutubeDataService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, youtube_data_service_1.YoutubeDataService])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=/Users/param/Documents/code/Youtube/tmp/broccoli_type_script_compiler-input_base_path-LWIkAiES.tmp/0/app/search-box/search-box.component.js.map