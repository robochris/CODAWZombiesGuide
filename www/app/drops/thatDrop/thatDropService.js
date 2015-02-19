(function () {
    'use strict';

    window.agApp.service('thatDropService', Service);

    function Service() {
        var service = {
            GetThatDrop: GetThatDrop
        };

        return service;

        function GetThatDrop(DropId) {
            if (DropId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "Oz",
                }
            ]
            }
            if (DropId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "this",
                }
            ]
            }
            if (DropId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "drop",
                }
            ]
            }
            if (DropId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "cool",
                }
            ]
            }
        }
    }
})();