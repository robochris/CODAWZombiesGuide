(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider) {
        console.log('config');

        //
        // For any unmatched url, redirect to /console-list
        $urlRouterProvider.otherwise("/map-list");
        //
        // Now set up the states
        $stateProvider.state('map-list', {
            url: "/map-list",
            templateUrl: "app/Map-list/map-list.html"
        });

    }

    function Run() {
        console.log('run');
    }


})();