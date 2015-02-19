(function () {
    'use strict';

    window.agApp.controller('songsController', Controller);


    function Controller(songsService, $scope) {
        var vm = this;
        vm.songs = [];

        Activate();

        function Activate() {
            vm.songs = songsService.GetSongs();
            $scope.mapMenu.selectedScreen = 'Song(s)';
        }
    }


})();