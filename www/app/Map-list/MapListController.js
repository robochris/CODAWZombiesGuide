(function () {
    'use strict';

    window.agApp.controller('MapListController', Controller);


    function Controller(MapListService) {
        var vm = this;
        vm.maps = [];

        Activate();

        function Activate() {
            vm.maps = MapListService.GetMaps();
        }
    }


})();