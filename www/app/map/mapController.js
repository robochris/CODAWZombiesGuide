(function () {
    'use strict';

    window.agApp.controller('MapController', Controller);


    function Controller(MapService) {
        var vm = this;
        vm.map = [];

        Activate();

        function Activate() {
            //vm.map = MapService.GetMap();
        }
    }


})();