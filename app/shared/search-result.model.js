"use strict";
var SearchResult = (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
            "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());
exports.SearchResult = SearchResult;
//# sourceMappingURL=/Users/param/Documents/code/Youtube/tmp/broccoli_type_script_compiler-input_base_path-LWIkAiES.tmp/0/app/shared/search-result.model.js.map