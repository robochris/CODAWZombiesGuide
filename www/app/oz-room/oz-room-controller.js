(function () {
    'use strict';

    window.agApp.controller('ozsroom', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = "Ozs' room";
            
        }
    }

    
})();