"use strict";

angular.module("discogs")
    .component("search", {
        templateUrl: "app/components/search/search.html",
        controller: ShowResult
    })


function ShowResult($state, $stateParams, SearchNextPrevious, $resource) {
    this.isresult = false;
    if($stateParams.result) {
        this.isresult = true;
        this.searchResult = $stateParams.result;
    }

    this.previousPage = function() {
        if(this.searchResult.pagination.urls.prev){
 $resource(this.searchResult.pagination.urls.prev, { key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"}).get().$promise.then(
                function( results ) {
                    $state.go('search', { result: results });        
            });
        }
        
    }
     this.nextPage = function() {
        if(this.searchResult.pagination.urls.next){
         
         $resource(this.searchResult.pagination.urls.next, { key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"}).get().$promise.then(
                function( results ) {
                    $state.go('search', { result: results });        
            });
        }
    }
   
    // if( !this.searchResult.status == "200" && this.searchResult.data.results.lenght > 0 ) {
    //     this.isResult = true;
    // }
}
