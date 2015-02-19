(function () {
    'use strict';

    window.agApp.controller('songsController', Controller);


    function Controller(songsService) {
        var vm = this;
        vm.songs = [];

        Activate();

        function Activate() {
            vm.songs = songsService.GetSongs();
        }
    }


})();