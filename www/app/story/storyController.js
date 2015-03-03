(function () {
    'use strict';

    window.agApp.controller('storyController', Controller);


    function Controller(storyService, $scope) {
        var vm = this;
        vm.storys = null;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Story';
            vm.storys = storyService.GetStorys();
        }
    }


})();