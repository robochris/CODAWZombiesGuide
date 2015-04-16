(function () {
    'use strict';

    window.agApp.service('thatzombieService', Service);

    function Service() {
        var service = {
            GetThatZombie: GetThatZombie
        };

        return service;

        function GetThatZombie(ZombieId) {
        }
    }
})();