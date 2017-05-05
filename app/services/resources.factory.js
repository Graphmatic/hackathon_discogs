"use strict";

angular.module("discogs")

    .factory("Artist", function($resource) {
        return $resource('https://api.discogs.com/artists/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("Label", function($resource) {
        return $resource('https://api.discogs.com/labels/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("ArtistReleases", function($resource) {
        return $resource('https://api.discogs.com/artists/:id/releases', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("LabelReleases", function($resource) {
        return $resource('https://api.discogs.com/labels/:id/releases', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("Release", function($resource) {
        return $resource('https://api.discogs.com/releases/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("LastArtistReleases", function($resource) {
        return $resource('https://api.discogs.com/artists/:artist_id/releases', {artist_id: '@artist_id', sort: 'year', sort_order : 'desc', page: "1", per_page: "3", key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("Search", function($resource) {
        return $resource('https://api.discogs.com/database/search', {type: '@type', page: "1", per_page: "10", key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
     .factory("SearchNextPrevious", function($resource) {
        return $resource('@url', { key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
     });
