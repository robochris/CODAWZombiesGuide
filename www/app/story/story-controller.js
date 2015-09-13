(function () {
    'use strict';

    window.agApp.controller('storyController', Controller);


    function Controller($scope, $stateParams) {
        var vm = this;
        vm.StoryId = $stateParams.StoryId;
        vm.storys = null;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = "Story";
        }
        
    }


})();