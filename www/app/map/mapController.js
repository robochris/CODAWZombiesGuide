(function () {
    'use strict';

    window.agApp.controller('MapController', Controller);


    function Controller(MapService,$stateParams,$scope, $timeout) {
        var vm = this;
        vm.map = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Map';
            vm.map = MapService.GetMap(vm.mapId);
            
            
            $timeout(function() {
                var $panzoom = $('.panzoom')
                .panzoom({
                    startTransform: 'scale(1.3)'
                })                
                .panzoom('zoom', 1.0, {
                    animate: true
                });

                $panzoom.parent().on('mousewheel.focal', function( e ) {
                    e.preventDefault();
                    var delta = e.delta || e.originalEvent.wheelDelta;
                    var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
                    $panzoom.panzoom('zoom', zoomOut, {
                      increment: 0.1,
                      animate: false,
                      focal: e
                    });
                });
            });
            
        }
    }


})();