"use strict";

angular.module("discogs")
    .component("release", {
        templateUrl: "app/components/release/release.html",
        controller: ReleaseDetail
    })


function ReleaseDetail(Release, $state, $stateParams, $sce, $scope) {
    // On récupère l'id transmis dans l'URL
    let idRelease = $stateParams.id;

    // On va chercher dans l'API toutes les informations liées à l'artiste dont l'id correspond
    //this.artist = Artist.get({id: idArtist});

    //this.release = Release.get({ id: idRelease });

    // Changement de l'url youtube

    this.release = Release.get({ id: idRelease }).$promise
        .then(function (release) {

            if(release.videos == null){
                $scope.release = release;
            }
            else{
                var newVids = [];
                release.videos.map(function (video) {
                    newVids.push(video);
                });


                console.log(newVids);
                for (let i = 0; i < newVids.length; i++) {
                    
                    newVids[i].uri = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVids[i].uri.split("=")[1]);
                }

                
                release.videos = newVids;

                console.log(release.videos);
                $scope.release = release;
            }
        });





}