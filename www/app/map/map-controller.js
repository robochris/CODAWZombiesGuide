(function () {
    'use strict';

    window.agApp.controller('MapController', Controller);


    function Controller($stateParams,$scope, $timeout) {
        var vm = this;
        vm.map = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.map = GetMap(vm.mapId);
            $scope.mapMenu.selectedScreen = 'Map';
            
            
            $timeout(function() {
                var $panzoom = $('.panzoom-parent img')
                .panzoom({
                    contain: 'invert',
                    minScale: 1,
                    maxScale: 3,
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
    
    function GetMap(mapId) {
            if (mapId == 5) {
                return {
                    imageUrl: "img/DescentMap.png"
                }
            }else if (mapId == 4) {
                return {
                    imageUrl: "img/CarrierMap.png"
                }
            }else if (mapId == 3) {
                return {
                    imageUrl: "img/Infectionmap.png"
                }
            }else if (mapId == 2) {
                return {
                    imageUrl: "img/mapOutbreak.png"
                }
            }else if (mapId == 1) {
                return {
                    imageUrl: "img/RiotMap.png"
                }
            }
        }

})();