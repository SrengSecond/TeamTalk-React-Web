import React from "react";

const ItemData = [
    {
        id:1,
        name: "Ace of Spades",
        ActivePerk: {
            name: "Memento Mori",
            description: "Grants radar while aiming down sights. Bonus damage after kill-reload."
        },
        weaponPerks:
            {
                barrel: "Corkscrew",
                magazine: "High-Caliber Round"
            }
    },

    {
        id:2,
        name: "Anarchy",
        ActivePerk: {
            name: "Arc Traps",
            description: "Grenades stick to surfaces and chain Arc bolts."
        },
        weaponPerks:
            {
                barrel: "QuickLaunch",
                magazine: "High-Velocity Round"
            }

    },

]
export default ItemData;