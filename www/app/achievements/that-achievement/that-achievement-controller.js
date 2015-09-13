(function () {
    'use strict';
    window.agApp.controller('thatAchievementController', Controller);
    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.AchievementId = $stateParams.AchievementId;
        

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Achievements/Trophys';
        }
    }
})();