(function () {
    'use strict';

    window.agApp.controller('MapController', Controller);


    function Controller(MapService,$stateParams) {
        var vm = this;
        vm.map = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.map = MapService.GetMap(vm.mapId);
        }
    }


})();