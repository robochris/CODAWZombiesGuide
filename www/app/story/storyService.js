(function () {
    'use strict';

    window.agApp.service('storyService', Service);

    function Service() {
        var service = {
            GetStorys: GetStorys
        };

        return service;

        function GetStorys() {
            return [
                {
                    StoryId: 1,
                    displayName: "Ride of the Valkyries" +
                    "this is \"line\" 2" + 
                    "this is line 3",
                },
                

            ]
        }
    }

})();