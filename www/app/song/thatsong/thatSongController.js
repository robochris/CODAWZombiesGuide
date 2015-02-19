(function () {
    'use strict';

    window.agApp.controller('thatSongController', Controller);


    function Controller(thatSongService, $stateParams) {
        var vm = this;
        vm.SongId= $stateParams.SongId;
        vm.song = [];
        
        Activate();

        function Activate() {
            vm.song = thatSongService.GetThatSong(vm.SongId);
        }
    }


})();