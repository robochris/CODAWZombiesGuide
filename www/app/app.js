(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router', 'ngMaterial'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider) {
        console.log('config');

        //
        // For any unmatched url, redirect to home
        $urlRouterProvider.otherwise("/map-list");
        
        //
        // Now set up the states
        
        $stateProvider.state('map-list', {
            url: "/map-list",
            templateUrl: "app/map-list/map-list.html"
        });
        
        $stateProvider.state('map-menu', {
            url: "/map-menu/{mapId}",
            templateUrl: "app/map-menu/map-menu.html"
        });

        $stateProvider.state('map', {
            url: "/map",
            templateUrl: "app/map/map.html",
            parent: 'map-menu'
        });

        $stateProvider.state('zombies', {
            url: "/zombies",
            templateUrl: "app/zombies/zombies.html",
            parent: 'map-menu'
        });
        
        
    }

    function Run() {
        console.log('run');
    }


})();