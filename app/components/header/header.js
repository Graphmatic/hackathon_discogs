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
        release_title: ""
    };

    this.startSearch = function() {
        let rep = {};
        angular.forEach(this.search, function(v, k) {
            if( v !== "" ) {
                rep[k] = v;
                 if( k === 'type' ) {
                     switch(v) {
                         case "artist":
                         rep.artist = this.search.query;
                         break;
                         case "release":
                         rep.release_title = this.search.query;
                         break;
                         case "label":
                         rep.label = this.search.query;
                         break;
                     }
                 }
            }
        }, this);

        Search.get(rep).$promise.then(
            function( results ) {
                $state.go('search', { result: results });        
            });


    // /database/search?q={query}&{?type,title,release_title,credit,artist,anv,label,genre,style,country,year,format,catno,barcode,track,submitter,contributor}
    }
}