(function () {
    'use strict';

    window.agApp.controller('songsController', Controller);


    function Controller(songsService, $scope, $stateParams) {
        var vm = this;
        vm.SongId = $stateParams.SongId;
        vm.songs = null;

        Activate();

        function Activate() {
            vm.songs = songsService.GetSongs();
            $scope.mapMenu.selectedScreen = vm.songs.displayName;
        }
    }


})();