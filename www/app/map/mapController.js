(function () {
    'use strict';

    window.agApp.controller('MapController', Controller);


    function Controller(MapService,$stateParams,$scope) {
        var vm = this;
        vm.map = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Map';
            vm.map = MapService.GetMap(vm.mapId);
        }
    }


})();