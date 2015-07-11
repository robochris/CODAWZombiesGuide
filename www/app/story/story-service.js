(function () {
    'use strict';

    window.agApp.service('storyService', Service);

    function Service() {
        var service = {
            GetStorys: GetStorys
        };

        return service;

        function GetStorys() {
            return {
                StoryId: 1,
                displayName: "Story"
            }, {
                StoryId: 2,
                displayName: "Story"
            },{
                StoryId: 3,
                displayName: "Story"
            },{
                StoryId: 4,
                displayName: "Story"
            };



        }
    }

})();