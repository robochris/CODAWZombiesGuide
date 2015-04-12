(function () {
    'use strict';

    window.agApp.controller('MapMenuController', Controller);


    function Controller($scope, $mdSidenav, $stateParams, MapMenuService, MapListService, $window) {
        var vm = this;
        vm.mapId = $stateParams.mapId;
        vm.menuItems = [];
        vm.menuOnly = true;
        vm.theMap = MapListService.GetMap(vm.mapId);
        vm.ToggleMenu = ToggleMenu;
        vm.selectedScreen = 'dork';
        
        
        
        Activate();

        
        function Activate() {
            vm.menuItems = MapMenuService.GetMenuItems(vm.mapId);
            
        }
        
        function ToggleMenu() {
            $mdSidenav('left').toggle();
        }
        
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $window.scrollTo(0, 0);
            if (toState.name == 'map-menu') {
                vm.menuOnly = true;
            }
            else {
                vm.menuOnly = false;
            }
        });

    }


})();