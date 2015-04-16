(function () {
    'use strict';

    window.agApp.service('strategyService', Service);

    function Service() {
        var service = {
            GetStrategy: GetStrategy
        };

        return service;

        function GetStrategy() {

            return {
                StrategyId: 1,
                displayName: "Game Over, Man"
            };


        }
    }

})();