(function () {
    'use strict';

    window.agApp.controller('storyController', Controller);


    function Controller(storyService) {
        var vm = this;
        vm.storys = [];

        Activate();

        function Activate() {
            vm.storys = storyService.GetStorys();
        }
    }


})();