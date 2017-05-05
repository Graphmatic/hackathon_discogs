"use strict";

angular.module("discogs")
    .component("search", {
        templateUrl: "app/components/search/search.html",
        controller: ShowResult
    })


function ShowResult($state, $stateParams, SearchNextPrevious) {
    this.isresult = false;
    if($stateParams.result) {
        this.isresult = true;
        this.searchResult = $stateParams.result;
    }

    this.previousPage = function() {
        SearchNextPrevious.get({query: this.searchResult.urls.previous}).$promise.then(
            function( results ) {
                $state.go('search', { result: results });        
            });
    }
     this.nextPage = function() {
         console.log('next');
        SearchNextPrevious.get({query: this.searchResult.urls.next}).$promise.then(
            function( results ) {
                $state.go('search', { result: results });        
            });
    }
   
    // if( !this.searchResult.status == "200" && this.searchResult.data.results.lenght > 0 ) {
    //     this.isResult = true;
    // }
}
