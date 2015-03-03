(function () {
    'use strict';

    window.agApp.service('thatzombieService', Service);

    function Service() {
        var service = {
            GetThatZombie: GetThatZombie
        };

        return service;

        function GetThatZombie(ZombieId) {
            if (ZombieId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (ZombieId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (ZombieId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (ZombieId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (ZombieId == 5) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (ZombieId == 6) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            
        }
    }
})();