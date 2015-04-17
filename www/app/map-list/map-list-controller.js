(function () {
    'use strict';

    window.agApp.controller('MapListController', Controller);


    function Controller(MapListService) {
        var vm = this;
        vm.maps = [];
        vm.MapClicked = MapClicked;

        Activate();

        function Activate() {
            vm.maps = MapListService.GetMaps();
        }
        
        function MapClicked(map) {   
        }
    }
})();