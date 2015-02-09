(function () {
    'use strict';

    window.agApp.controller('MenuListController', Controller);


    function Controller(MenuListService) {
        var vm = this;
        vm.menus = [];

        Activate();

        function Activate() {
            vm.menus = MenuListService.GetMenus();
        }
    }


})();