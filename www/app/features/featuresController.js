(function () {
    'use strict';

    window.agApp.controller('featuresController', Controller);


    function Controller(featuresService) {
        var vm = this;
        vm.features = [];

        Activate();

        function Activate() {
            vm.features = featuresService.GetFeatures();
        }
    }


})();