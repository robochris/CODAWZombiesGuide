(function () {
    'use strict';

    window.agApp.controller('weaponController', Controller);


    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.weapontId = $stateParams.weapontId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Weapons';
        }
    }

})();