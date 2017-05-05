"use strict";

angular.module("discogs")
    .component("header", {
        templateUrl: "app/components/header/header.html",
        controller: Header
    })


function Header(Search, $state, $stateParams) {
    this.selectOptions =  [
        {
            value: "artist",
            name: "Artist"
        },
        {
            value: "release",
            name: "Album"
        },
        {
            value: "label",
            name: "Label"
        }
    ];
    this.currentYear = new Date().getFullYear();

    this.search = {
        type: this.selectOptions[0].value,
        query: "",
        genre: "",
        year: "",
        country: "",
        artist: "",
        release_title: "",
        q: ""
    };

    this.startSearch = function() {
        let rep = {};
        angular.forEach(this.search, function(v, k) {
            if( v !== "" ) {
                rep[k] = v;
                 if( k === 'type' ) {
                     switch(v) {
                         case "artist":
                         break;
                         case "release":
                         rep.release_title = this.search.query;
                         rep.q = "";                         
                         break;
                         case "label":
                         rep.label = this.search.query;
                         rep.q = "";                                                  
                         break;
                     } 
                 }
            }
        }, this);

       


        Search.get(rep).$promise.then(
            function( results ) {
                $state.go('search', { result: results });        
            });
    }

   
}