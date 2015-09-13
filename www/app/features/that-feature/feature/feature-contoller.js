(function () {
    'use strict';

    window.agApp.controller('featureController', Controller);


    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.TrapId = $stateParams.TrapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Feature';
        }
    }

})();