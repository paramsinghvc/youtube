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
var core_1 = require('@angular/core');
var MDL_1 = require('./shared/MDL');
var _1 = require('./search-box/');
var _2 = require('./snippet-item/');
var YoutubeAppComponent = (function () {
    function YoutubeAppComponent() {
        this.title = 'Youtube Search';
    }
    YoutubeAppComponent.prototype.updateResults = function (results) {
        console.log(results);
        this.results = results;
    };
    YoutubeAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'youtube-app',
            directives: [MDL_1.MDL, _1.SearchBoxComponent, _2.SnippetItemComponent],
            templateUrl: 'youtube.component.html',
            styleUrls: ['youtube.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], YoutubeAppComponent);
    return YoutubeAppComponent;
}());
exports.YoutubeAppComponent = YoutubeAppComponent;
//# sourceMappingURL=/Users/param/Documents/code/Youtube/tmp/broccoli_type_script_compiler-input_base_path-TvmzazJH.tmp/0/app/youtube.component.js.map