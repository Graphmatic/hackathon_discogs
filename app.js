
"use strict";

angular.module("discogs", [
    // les dépendances externes
    "ui.router",
    "ngResource"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            },
            {
                name: "artist",
                url: "/artist/:id",
                component: "artist"
            },
            {
                name: "release",
                url: "/release/:id",
                component: "release"
            },
            {
                name: "search",
                url: "/search",
                params: {result:null},
                component: "search"
            },
        ];
        $urlRouterProvider.otherwise("/home");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    });