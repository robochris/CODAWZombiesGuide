(function () {
    'use strict';

    window.agApp.controller('storyController', Controller);


    function Controller(storyService, $scope, $stateParams) {
        var vm = this;
        vm.StoryId = $stateParams.StoryId;
        vm.storys = null;

        Activate();

        function Activate() {
            vm.storys = storyService.GetStorys();
            $scope.mapMenu.selectedScreen = vm.storys.displayName;
        }
    }


})();