"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home(Artist, LastArtistReleases, Label) {
    let artistsId =  [
        "791",
        "65049",
        "133768",   // Big Pun
        "767240",    // 5 Wards Juvenilez
        // "10584",    // Nina Simone
        // "15588",    // Gonzalez
        // "114318",    // Bushwick Bill
        // "661",    // Bill Laswell
        // "82663",  // Hijack
        // "10783"  // Beastie Boys

    ];
    let artists = [];
    let labels = [];
    let releases = [];

    angular.forEach(artistsId, function(v, k) {
        let tmp = {};
        tmp = Artist.get({id: v});
        tmp.$promise.then(function(data) { // then get release
            // backup
            artists.push(data);
            let tmpx = {};
            tmpx = LastArtistReleases.get({artist_id : data.id});
            tmpx.$promise.then(function(dataRelease) { 
                releases[data.id] = dataRelease;
            });
        });
    });
    this.artists = artists;

    this.artistsReleases = releases;

    this.getArtistReleases = function(id) {
                return this.artistsReleases[id];
    }

    this.label = function(id) {
        return Label.get({ id : id});
    }
}