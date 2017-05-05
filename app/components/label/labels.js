"use strict";

angular.module("discogs")
    .component("labels", {
        templateUrl: "app/components/label/labels.html",
        controller: LabelDetail
    })


function LabelDetail(Artist, LabelReleases, Label, Release, $state, $stateParams) {
    // On récupère l'id transmis dans l'URL
    let idLabel = $stateParams.id;
    
    // On va chercher dans l'API toutes les informations liées à l'artiste dont l'id correspond
    this.label = Label.get({id: idLabel});
    
    // On récupère toutes les créations liées à l'ID
    this.releases = LabelReleases.get({id: idLabel});
}