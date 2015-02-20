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
                    displayName: "Four Atlas soldiers are sent in to contain a prison Riot that had escalated into a full-out war. However, in the midst of the battle, the Atlas Corporation deployed massive amounts of the Manticore bio-weapon, intending to end the war. Instead, the deceased rioters reanimated into mindless creatures, and attacked the soldiers. Gideon arrives in a Warbird to rescue the stranded soldiers; however, the Warbird is overrun by zombies, and Gideon is presumably killed by the horde." 

                        "Following the outbreak at the prison, the Atlas Corporation sent in three platoons to contain the infected. Two of them returned in body bags. Unbeknownst to any employees' knowledge, several zombies were contained and taken in secret to an Atlas research lab for further studies. The zombies were hidden away in the secret Sublevel 6 of the facility. However, presumably due to a power outage, the zombies escaped containment, and a massive Outbreak ravaged the facility before anyone knew what was happening. Only four Atlas employees - Oz the maintenance worker/janitor, Lilith the I.T. specialist, Decker the security guard, and Kahn the executive - remained." + "" +

                        "Oz witnessed the initial outbreak, and was able to escape to safety early, as he was able to gain access to Sublevel 6 to clean the floors. After an emergency signal is sent out through the facility, Lilith learns of the outbreak while watching security monitors. Kahn instantly realizes what has happened when he is notified of the emergency and takes action. Joined by Decker, who managed to outrun the horde, the four survivors expect to be rescued by Atlas support, only to find the incoming rescue Warbird swarmed with zombies and crash right before their eyes. The four untrained survivors found themselves trapped in the facility, and are forced to fight their way out." + "" +

                        "After deciding that the Atlas corporation isn't going to send anyone for them (although they curiously seem to silently watch from afar and send assistance via Orbital Drops), the four attempt to send out their own rescue signal (Game Over, Man!). While attempting to gain clearance to surpass the security system via Angie's instructions, it becomes increasingly apparent to the survivors that someone has set them up and is testing them to see if they can escape. When the security is finally bypassed, a prerecorded voice message tells the survivors that they have passed Stage One, and have twenty four hours to reach the rendezvous point for Stage Two. A rescue signal is sent out, and a new Warbird is called in. However, as the new Warbird approaches the facility, it is shot down by a missile, leaving the four survivors stranded once again."
                },


            ]
        }
    }

})();