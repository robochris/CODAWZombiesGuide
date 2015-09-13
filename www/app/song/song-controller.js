(function () {
    'use strict';

    window.agApp.controller('songsController', Controller);


    function Controller($scope, $stateParams) {
        var vm = this;
        vm.SongId = $stateParams.SongId;
        vm.songs = null;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = "Song";
        }
    }

    
})();