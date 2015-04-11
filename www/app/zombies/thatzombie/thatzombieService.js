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
                       
                }
            ]
            }
            if (ZombieId == 2) {
                return [
                    {
                        
                }
            ]
            }
            if (ZombieId == 3) {
                return [
                    {                        
                }
            ]
            }
            if (ZombieId == 4) {
                return [
                    {
                }
            ]
            }
            if (ZombieId == 5) {
                return [
                    {
                }
            ]
            }
            if (ZombieId == 6) {
                return [
                    {
                }
            ]
            }
            
        }
    }
})();