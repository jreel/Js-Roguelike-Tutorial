/**
 * Created by jreel on 4/30/2015.
 */

// TODO: think about other properties of tiles.
// for instance, water tiles.
// isWalkable should be false, but what about
// swimming or boating?

Game.Tileset = function(catalog) {
    // construct a "full" tileset from a catalog.
    // The defaults should contain names and boolean settings;
    // the passed-in catalog should contain any changes to the glyph
    // (character/color) info for the defaults,
    // as well as any additional entries.

    var defaults = {
        // defaults are taken from the original 'cave' tileset
        floor: {
            description: 'A stone floor',
            character: '.',
            foreground: '#777',
            background: '#000',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        wall: {
            description: 'A stone wall',
            character: '#',
            foreground: '#976',
            background: '#643',
            isWalkable: false,
            isBreakable: true,
            passesLight: false
        },

        ground: {
            description: "The ground",
            character: '.',
            foreground: '#777',
            background: '#000',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        terrain: {
            description: "Rough terrain",
            character: '^',
            foreground: '#777',
            background: '#000',
            isWalkable: false,
            isBreakable: false,
            passesLight: true
        },

        blocked: {
            description: 'A stone wall',
            character: '▓',
            foreground: '#222',
            background: '#333',
            isWalkable: false,
            isBreakable: false,
            passesLight: false
        },

        stairsUp: {
            description: 'A staircase leading upwards',
            character: '<',
            foreground: '#ca6',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        stairsDown: {
            description: 'A staircase leading downwards',
            character: '>',
            foreground: '#ca6',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        corridor: {
            description: 'A stone floor',
            character: '.',
            foreground: '#777',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        closedDoor: {
            description: 'A closed wooden door',
            character: '+',
            foreground: '#941',
            isWalkable: false,
            isBreakable: false,
            passesLight: false
        },

        openDoor: {
            description: 'An open wooden door',
            character: '/',
            foreground: '#941',
            isWalkable: true,
            isBreakable: false,
            passesLight: true
        },

        secretDoor: {
            description: 'A stone wall... or is it?',
            character: '#',
            foreground: '#976',
            background: '#643',
            isWalkable: false,
            isBreakable: true,
            passesLight: false
        },

        water: {
            description: 'Murky water',
            character: '≈',
            foreground: '#08c',
            isWalkable: false,
            isBreakable: false,
            passesLight: true
        }
    };

    // apply the defaults into the catalog where needed
    catalog = applyDefaults(catalog, defaults);

    // now, for each template in the catalog, apply the defaults
    var templates = Object.keys(catalog);
    var len = templates.length;
    var key;
    for (var i = 0; i < len; i++) {
        key = templates[i];
        catalog[key] = applyDefaults(catalog[key], defaults[key]);
        this[key] = new Game.Tile(catalog[key]);
    }

};


Game.Tilesets = {};

// the worldMap tileset is constructed manually because it's so different
// from the regular "area" tilesets
Game.Tilesets.worldMap = {

    POLAR_ICECAP: new Game.Tile({
        name: '',
        description: 'The polar regions, consisting of mostly ice and snow',
        character: '~',
        foreground: '#EEFFFF',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    GLACIER: new Game.Tile({
        name: '',
        description: 'A glacier: a slowly moving mass of ice',
        character: 'ʌ',
        foreground: '#87CEFA',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    DEEP_WATER: new Game.Tile({
        name: '',
        description: 'Deep ocean water',
        character: '≈',
        foreground: '#0000CD',
        background: '#000',
        isWalkable: false,
        isBreakable: false,
        passesLight: true
    }
    ),
    SHALLOW_WATER: new Game.Tile({
        name: '',
        description: 'Shallow water',
        character: '≈',
        foreground: '#4169E1',
        background: '#000',
        isWalkable: false,
        isBreakable: false,
        passesLight: true
    }
    ),
    SNOWCAPPED: new Game.Tile({
        name: '',
        description: 'Snowcap: the snowy peak of a mountain',
        character: '^',
        foreground: '#FFFFFF',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    MOUNTAIN: new Game.Tile({
        name: '',
        description: 'A tall, rocky mountain',
        character: 'ʌ',
        foreground: '#809080',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    BADLANDS: new Game.Tile({
        name: '',
        description: 'Badlands: a region of red, rocky desert',
        character: 'Ѧ',
        foreground: '#EF7347',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    CRAG: new Game.Tile({
        name: '',
        description: 'Crag: a steep, rugged cliff or rock face',
        character: 'Ѧ',
        foreground: '#595959',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    COLD_BEACH: new Game.Tile({
        name: '',
        description: 'Cold beach: a coastal area of wet, rocky sand and cool temperatures',
        character: '~',
        foreground: '#B0C4DE',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    BEACH: new Game.Tile({
        name: '',
        description: 'Beach: a coastal area of wet sand and mild-to-warm temperatures',
        character: '~',
        foreground: '#DEB887',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    MARSHLAND: new Game.Tile({
        name: '',
        description: 'An area of marshland',
        character: '↡',
        foreground: '#008080',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    SWAMP: new Game.Tile({
        name: '',
        description: 'A swamp',
        character: '⇣',
        foreground: '#556B2F',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    TUNDRA: new Game.Tile({
        name: '',
        description: 'The tundra: a vast, flat, treeless, mostly frozen region',
        character: '"',
        foreground: '#5F9EA0',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    BARRENS: new Game.Tile({
        name: '',
        description: 'The barrens: a region of cold, flat rock where nothing can grow',
        character: '-',
        foreground: '#778899',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    TAIGA: new Game.Tile({
        name: '',
        description: 'The taiga: a cold region of mostly coniferous forest',
        character: '♠',
        foreground: '#123823',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    COLD_SCRUBLAND: new Game.Tile({
        name: '',
        description: 'Cold scrubland: a dry, cold region of scattered small plants, but no trees',
        character: '*',
        foreground: '#556B2F',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    COLD_DESERT: new Game.Tile({
        name: '',
        description: 'Cold desert: a dry, cold, lifeless region of swirling snow, sand, and dust',
        character: ',',
        foreground: '#778899',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    CONIFEROUS_FOREST: new Game.Tile({
        name: '',
        description: 'Coniferous forest: a mild-to-cool forest of various evergreen trees',
        character: '↟',
        foreground: '#008000',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    BROADLEAF_FOREST: new Game.Tile({
        name: '',
        description: 'Broadleaf forest: a mild-to-cool forest of various leafy trees',
        character: '♣',
        foreground: '#587A2A',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    SHRUBLAND: new Game.Tile({
        name: '',
        description: 'Shrubland: a mild-to-cool region of grass and small shrubs, but no trees',
        character: '♧',
        foreground: '#6B8E23',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    GRASSLAND: new Game.Tile({
        name: '',
        description: 'Grassland: a mild-to-cool region of tall grasses, but no trees',
        character: '"',
        foreground: '#9ACD32',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    DUSTBOWL: new Game.Tile({
        name: '',
        description: 'Dustbowl: a region that may have been a grassland once, but is now just dry dirt and dust',
        character: '.',
        foreground: '#BDB76B',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    SCRUBLAND: new Game.Tile({
        name: '',
        description: 'Scrubland: a dry, mild-to-warm region of scattered small plants, but no trees',
        character: '*',
        foreground: '#CD853F',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    DESERT: new Game.Tile({
        name: '',
        description: 'Desert: a hot, dry, lifeless region of swirling sand and extreme temperatures',
        character: ',',
        foreground: '#FEF87A',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    JUNGLE: new Game.Tile({
        name: '',
        description: 'Jungle: a wet, tropical region of dense forest and tangled vegetation',
        character: '✾',
        foreground: '#229D52',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),
    SAVANNA: new Game.Tile({
        name: '',
        description: 'Savanna: a hot, somewhat dry region of tall grasses and few trees',
        character: '⇡',
        foreground: '#B8960B',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    ),


    TOWN: new Game.Tile({
        name: '',
        description: 'A small town',
        character: '+',
        foreground: '#FF0000',
        background: '#000',
        isWalkable: true,
        isBreakable: false,
        passesLight: true
    }
    )
};

/*
 biome / "natural" area tilesets
 (note that these use the same constructor, and so are still
 defined in terms of the "dungeon" tilesets)
 */
// TODO: (but possibly in the tile drawing routine) random slight variation in color
Game.Tilesets.polar = new Game.Tileset({
    ground: { character: '~', foreground: '#EEFFFF', background: '#D0E0F0' },
    terrain: { character: 'Ѧ', foreground: '#A0D0DD', background: '#D0E0F0', passesLight: false },
    blocked: { character: '#', foreground: '#4682B4', background: '#2F4F4F' },
    stairsUp: { character: '<', foreground: '#EEFFFF', background: '#D0E0F0' },
    stairsDown: { character: '>', foreground: '#EEFFFF', background: '#D0E0F0' },
    corridor: { character: '~', foreground: '#EEFFFF', background: '#D0E0F0' },
    closedDoor: { character: '+', foreground: '#2F4F4F', background: '#D0E0F0' },
    openDoor: { character: '/', foreground: '#2F4F4F', background: '#D0E0F0' },
    secretDoor: { character: 'Ѧ', foreground: '#A0D0DD', background: '#D0E0F0' },
    water: { character: '-', foreground: '#87CEEB', background: '#4682B4' }
});

Game.Tilesets.glacier = new Game.Tileset({
    ground: { character: '^', foreground: '#D0E0F0', background: '#A0D0DD' },
    terrain: { character: 'Ѧ', foreground: '#D0E0F0', background: '#A0D0DD', passesLight: false },
    blocked: { character: '#', foreground: '#4682B4', background: '#2F4F4F' },
    stairsUp: { character: '<', foreground: '#D0E0F0', background: '#A0D0DD' },
    stairsDown: { character: '>', foreground: '#D0E0F0', background: '#A0D0DD' },
    corridor: { character: '^', foreground: '#D0E0F0', background: '#A0D0DD' },
    closedDoor: { character: '+', foreground: '#2F4F4F', background: '#A0D0DD' },
    openDoor: { character: '/', foreground: '#2F4F4F', background: '#A0D0DD' },
    secretDoor: { character: 'Ѧ', foreground: '#D0E0F0', background: '#A0D0DD' },
    water: { character: '-', foreground: '#87CEEB', background: '#4682B4' }
});

Game.Tilesets.ocean = new Game.Tileset({
    ground: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." },
    terrain: { character: '≈', foreground: '#4169E1', background: '#0000CD', passesLight: true, description: "Water, water everywhere..." },
    blocked: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." },
    stairsUp: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." },
    stairsDown: { character: '≈', foreground: '#4169E1', background: '#0000CD',
        description: "Water, water everywhere..." },
    corridor: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." },
    closedDoor: { character: '≈', foreground: '#4169E1', background: '#0000CD',
        description: "Water, water everywhere..." },
    openDoor: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." },
    secretDoor: { character: '≈', foreground: '#4169E1', background: '#0000CD',
        description: "Water, water everywhere..." },
    water: { character: '≈', foreground: '#4169E1', background: '#0000CD', description: "Water, water everywhere..." }
});

Game.Tilesets.snowcap = new Game.Tileset({
    ground: { character: '^', foreground: '#EEFFFF', background: '#595959' },
    terrain: { character: 'Ѧ', foreground: '#809080', background: '#595959', passesLight: false },
    blocked: { character: '#', foreground: '#809080', background: '#595959' },
    stairsUp: { character: '<', foreground: '#809080', background: '#595959' },
    stairsDown: { character: '>', foreground: '#809080', background: '#595959' },
    corridor: { character: '^', foreground: '#EEFFFF', background: '#595959' },
    closedDoor: { character: '+', foreground: '#809080', background: '#595959' },
    openDoor: { character: '/', foreground: '#809080', background: '#595959' },
    secretDoor: { character: 'Ѧ', foreground: '#809080', background: '#595959' },
    water: { character: '~', foreground: '#87CEEB', background: '#595959' }
});

Game.Tilesets.rocky = new Game.Tileset({
    ground: { character: '^', foreground: '#809080', background: '#595959' },
    terrain: { character: 'Ѧ', foreground: '#809080', background: '#595959', passesLight: false },
    blocked: { character: '#', foreground: '#809080', background: '#595959' },
    stairsUp: { character: '<', foreground: '#809080', background: '#595959' },
    stairsDown: { character: '>', foreground: '#809080', background: '#595959' },
    corridor: { character: '^', foreground: '#809080', background: '#595959' },
    closedDoor: { character: '+', foreground: '#809080', background: '#595959' },
    openDoor: { character: '/', foreground: '#809080', background: '#595959' },
    secretDoor: { character: 'Ѧ', foreground: '#809080', background: '#595959' },
    water: { character: '≈', foreground: '#4682B4', background: '#595959' }
});

Game.Tilesets.redrock = new Game.Tileset({
    ground: { character: '^', foreground: '#E84D27', background: '#E29A6C' },
    terrain: { character: 'Ѧ', foreground: '#CC3300', background: '#E29A6C', passesLight: false },
    blocked: { character: '#', foreground: '#CC3300', background: '#E29A6C' },
    stairsUp: { character: '<', foreground: '#CC3300', background: '#E29A6C' },
    stairsDown: { character: '>', foreground: '#CC3300', background: '#E29A6C' },
    corridor: { character: '^', foreground: '#E84D27', background: '#E29A6C' },
    closedDoor: { character: '+', foreground: '#CC3300', background: '#E29A6C' },
    openDoor: { character: '/', foreground: '#CC3300', background: '#E29A6C' },
    secretDoor: { character: 'Ѧ', foreground: '#CC3300', background: '#E29A6C' },
    water: { character: '≈', foreground: '#4169E1', background: '#E29A6C' }
});

Game.Tilesets.coldbeach = new Game.Tileset({
    ground: { character: '~', foreground: '#778899', background: '#A0B4BF' },
    terrain: { character: '^', foreground: '#778899', background: '#A0B4BF', passesLight: true },
    blocked: { character: '^', foreground: '#778899', background: '#A0B4BF' },
    stairsUp: { character: '<', foreground: '#778899', background: '#A0B4BF' },
    stairsDown: { character: '>', foreground: '#778899', background: '#A0B4BF' },
    corridor: { character: '~', foreground: '#778899', background: '#A0B4BF' },
    closedDoor: { character: '+', foreground: '#778899', background: '#A0B4BF' },
    openDoor: { character: '/', foreground: '#778899', background: '#A0B4BF' },
    secretDoor: { character: '^', foreground: '#778899', background: '#A0B4BF' },
    water: { character: '≈', foreground: '#4682B4', background: '#A0B4BF' }
});

Game.Tilesets.beach = new Game.Tileset({
    ground: { character: '~', foreground: '#DEB887', background: '#FFDEAD' },
    terrain: { character: '^', foreground: '#DEB887', background: '#FFDEAD', passesLight: true },
    blocked: { character: '^', foreground: '#DEB887', background: '#FFDEAD' },
    stairsUp: { character: '<', foreground: '#DEB887', background: '#FFDEAD' },
    stairsDown: { character: '>', foreground: '#DEB887', background: '#FFDEAD' },
    corridor: { character: '~', foreground: '#DEB887', background: '#FFDEAD' },
    closedDoor: { character: '+', foreground: '#DEB887', background: '#FFDEAD' },
    openDoor: { character: '/', foreground: '#DEB887', background: '#FFDEAD' },
    secretDoor: { character: '^', foreground: '#DEB887', background: '#FFDEAD' },
    water: { character: '≈', foreground: '#4169E1', background: '#FFDEAD' }
});

Game.Tilesets.marsh = new Game.Tileset({
    ground: { character: '~', foreground: '#8FBC8F', background: '#1A6545' },
    terrain: { character: '⇣', foreground: '#BDB76B', background: '#1A6545', passesLight: true },
    blocked: { character: '≈', foreground: '#123823', background: '#1A6545' },
    stairsUp: { character: '<', foreground: '#8FBC8F', background: '#1A6545' },
    stairsDown: { character: '>', foreground: '#8FBC8F', background: '#1A6545' },
    corridor: { character: '~', foreground: '#8FBC8F', background: '#1A6545' },
    closedDoor: { character: '+', foreground: '#BDB76B', background: '#1A6545' },
    openDoor: { character: '/', foreground: '#BDB76B', background: '#1A6545' },
    secretDoor: { character: '⇣', foreground: '#BDB76B', background: '#1A6545' },
    water: { character: '≈', foreground: '#123823', background: '#1A6545' }
});

Game.Tilesets.swamp = new Game.Tileset({
    ground: { character: '~', foreground: '#556B2F', background: '#40440E' },
    terrain: { character: '⇣', foreground: '#808000', background: '#40440E', passesLight: false },
    blocked: { character: '≈', foreground: '#123823', background: '#40440E' },
    stairsUp: { character: '<', foreground: '#556B2F', background: '#40440E' },
    stairsDown: { character: '>', foreground: '#556B2F', background: '#40440E' },
    corridor: { character: '~', foreground: '#556B2F', background: '#40440E' },
    closedDoor: { character: '+', foreground: '#808000', background: '#40440E' },
    openDoor: { character: '/', foreground: '#808000', background: '#40440E' },
    secretDoor: { character: '↡', foreground: '#808000', background: '#40440E' },
    water: { character: '≈', foreground: '#123823', background: '#40440E' }
});

Game.Tilesets.tundra = new Game.Tileset({
    ground: { character: '"', foreground: '#4FAE80', background: '#556666' },
    terrain: { character: '^', foreground: '#90A090', background: '#556666', passesLight: true },
    blocked: { character: '^', foreground: '#90A090', background: '#556666' },
    stairsUp: { character: '<', foreground: '#90A090', background: '#556666' },
    stairsDown: { character: '>', foreground: '#90A090', background: '#556666' },
    corridor: { character: '"', foreground: '#4FAE80', background: '#556666' },
    closedDoor: { character: '+', foreground: '#90A090', background: '#556666' },
    openDoor: { character: '/', foreground: '#90A090', background: '#556666' },
    secretDoor: { character: '^', foreground: '#90A090', background: '#556666' },
    water: { character: '~', foreground: '#4682B4', background: '#556666' }
});

Game.Tilesets.coldbarrens = new Game.Tileset({
    ground: { character: '-', foreground: '#90A090', background: '#556666' },
    terrain: { character: '^', foreground: '#90A090', background: '#556666', passesLight: true },
    blocked: { character: '^', foreground: '#90A090', background: '#556666' },
    stairsUp: { character: '<', foreground: '#90A090', background: '#556666' },
    stairsDown: { character: '>', foreground: '#90A090', background: '#556666' },
    corridor: { character: '-', foreground: '#90A090', background: '#556666' },
    closedDoor: { character: '+', foreground: '#90A090', background: '#556666' },
    openDoor: { character: '/', foreground: '#90A090', background: '#556666' },
    secretDoor: { character: '^', foreground: '#90A090', background: '#556666' },
    water: { character: '~', foreground: '#4682B4', background: '#556666' }
});

Game.Tilesets.desert = new Game.Tileset({
    ground: { character: '`', foreground: '#FEF87A', background: '#E8D170' },
    terrain: { character: '^', foreground: '#FEF87A', background: '#E8D170', passesLight: true },
    blocked: { character: '^', foreground: '#FEF87A', background: '#E8D170' },
    stairsUp: { character: '<', foreground: '#FEF87A', background: '#E8D170' },
    stairsDown: { character: '>', foreground: '#FEF87A', background: '#E8D170' },
    corridor: { character: '`', foreground: '#FEF87A', background: '#E8D170' },
    closedDoor: { character: '+', foreground: '#FEF87A', background: '#E8D170' },
    openDoor: { character: '/', foreground: '#FEF87A', background: '#E8D170' },
    secretDoor: { character: '^', foreground: '#FEF87A', background: '#E8D170' },
    water: { character: '.', foreground: '#4169E1', background: '#E8D170' }
});

Game.Tilesets.colddesert = new Game.Tileset({
    ground: { character: '`', foreground: '#D0E0F0', background: '#A0B4BF' },
    terrain: { character: '^', foreground: '#D0E0F0', background: '#A0B4BF', passesLight: true },
    blocked: { character: '^', foreground: '#D0E0F0', background: '#A0B4BF' },
    stairsUp: { character: '<', foreground: '#D0E0F0', background: '#A0B4BF' },
    stairsDown: { character: '>', foreground: '#D0E0F0', background: '#A0B4BF' },
    corridor: { character: '`', foreground: '#D0E0F0', background: '#A0B4BF' },
    closedDoor: { character: '+', foreground: '#D0E0F0', background: '#A0B4BF' },
    openDoor: { character: '/', foreground: '#D0E0F0', background: '#A0B4BF' },
    secretDoor: { character: '^', foreground: '#D0E0F0', background: '#A0B4BF' },
    water: { character: '.', foreground: '#D0E0F0', background: '#A0B4BF' }
});

Game.Tilesets.plains = new Game.Tileset({
    ground: { character: '"', foreground: '#9ACD32', background: '#606030' },
    terrain: { character: '^', foreground: '#C0B0A0', background: '#606030', passesLight: true },
    blocked: { character: '^', foreground: '#C0B0A0', background: '#606030' },
    stairsUp: { character: '<', foreground: '#9ACD32', background: '#606030' },
    stairsDown: { character: '>', foreground: '#9ACD32', background: '#606030' },
    corridor: { character: '"', foreground: '#9ACD32', background: '#606030' },
    closedDoor: { character: '+', foreground: '#C0B0A0', background: '#606030' },
    openDoor: { character: '/', foreground: '#C0B0A0', background: '#606030' },
    secretDoor: { character: '^', foreground: '#C0B0A0', background: '#606030' },
    water: { character: '≈', foreground: '#4169E1', background: '#606030' }
});

Game.Tilesets.dust = new Game.Tileset({
    ground: { character: '`', foreground: '#9ACD32', background: '#E8D170' },
    terrain: { character: '^', foreground: '#C0B0A0', background: '#E8D170', passesLight: true },
    blocked: { character: '^', foreground: '#C0B0A0', background: '#E8D170' },
    stairsUp: { character: '<', foreground: '#9ACD32', background: '#E8D170' },
    stairsDown: { character: '>', foreground: '#9ACD32', background: '#E8D170' },
    corridor: { character: '`', foreground: '#9ACD32', background: '#E8D170' },
    closedDoor: { character: '+', foreground: '#C0B0A0', background: '#E8D170' },
    openDoor: { character: '/', foreground: '#C0B0A0', background: '#E8D170' },
    secretDoor: { character: '^', foreground: '#C0B0A0', background: '#E8D170' },
    water: { character: '.', foreground: '#4169E1', background: '#E8D170' }
});

Game.Tilesets.forest = new Game.Tileset({
    ground: { character: '.', foreground: '#556B2F', background: '#33401C' },
    terrain: { character: '♣', foreground: '#587A2A', background: '#33401C', passesLight: false,
        description: "A tree" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#33401C' },
    stairsUp: { character: '<', foreground: '#556B2F', background: '#33401C' },
    stairsDown: { character: '>', foreground: '#556B2F', background: '#33401C' },
    corridor: { character: '.', foreground: '#556B2F', background: '#33401C' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#33401C' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#33401C' },
    secretDoor: { character: '♣', foreground: '#587A2A', background: '#33401C',
        description: "A tree... or is it?" },
    water: { character: '≈', foreground: '#4169E1', background: '#33401C' }
});

Game.Tilesets.shrub = new Game.Tileset({
    ground: { character: '"', foreground: '#587A2A', background: '#445020' },
    terrain: { character: '♣', foreground: '#6E9826', background: '#445020', passesLight: false,
        description: "A shrub" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#445020' },
    stairsUp: { character: '<', foreground: '#587A2A', background: '#445020' },
    stairsDown: { character: '>', foreground: '#587A2A', background: '#445020' },
    corridor: { character: '"', foreground: '#587A2A', background: '#445020' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#445020' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#445020' },
    secretDoor: { character: '♣', foreground: '#78A625', background: '#445020',
        description: "A shrub... or is it?" },
    water: { character: '≈', foreground: '#4169E1', background: '#445020' }
});

Game.Tilesets.rainforest = new Game.Tileset({
    ground: { character: '.', foreground: '#556B2F', background: '#29280C' },
    terrain: { character: '↟', foreground: '#008000', background: '#29280C', passesLight: false,
        description: "A tree" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#29280C' },
    stairsUp: { character: '<', foreground: '#556B2F', background: '#29280C' },
    stairsDown: { character: '>', foreground: '#556B2F', background: '#29280C' },
    corridor: { character: '.', foreground: '#556B2F', background: '#29280C' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#29280C' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#29280C' },
    secretDoor: { character: '↟', foreground: '#008000', background: '#29280C',
        description: "A tree... or is it?" },
    water: { character: '≈', foreground: '#4682B4', background: '#29280C' }
});

Game.Tilesets.jungle = new Game.Tileset({
    ground: { character: '"', foreground: '#32CD32', background: '#005400' },
    terrain: { character: '✾', foreground: '#229D52', background: '#005400', passesLight: false,
        description: "A vine-covered tree" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#005400' },
    stairsUp: { character: '<', foreground: '#32CD32', background: '#005400' },
    stairsDown: { character: '>', foreground: '#32CD32', background: '#005400' },
    corridor: { character: '"', foreground: '#32CD32', background: '#005400' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#005400' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#005400' },
    secretDoor: { character: '✾', foreground: '#229D52', background: '#005400',
        description: "A vine-covered tree" },
    water: { character: '≈', foreground: '#4169E1', background: '#005400' }
});

Game.Tilesets.taiga = new Game.Tileset({
    ground: { character: '.', foreground: '#556B2F', background: '#778F77' },
    terrain: { character: '♠', foreground: '#123823', background: '#778F77', passesLight: false,
        description: "A tree" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#778F77' },
    stairsUp: { character: '<', foreground: '#556B2F', background: '#778F77' },
    stairsDown: { character: '>', foreground: '#556B2F', background: '#778F77' },
    corridor: { character: '.', foreground: '#556B2F', background: '#778F77' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#778F77' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#778F77' },
    secretDoor: { character: '♠', foreground: '#123823', background: '#778F77',
        description: "A tree" },
    water: { character: '≈', foreground: '#4682B4', background: '#778F77' }
});

Game.Tilesets.savanna = new Game.Tileset({
    ground: { character: '"', foreground: '#CCCC56', background: '#B8963B' },
    terrain: { character: '⇡', foreground: '#556B2F', background: '#B8963B', passesLight: false,
        description: "A tree" },
    blocked: { character: 'Ѧ', foreground: '#CD853F', background: '#B8963B' },
    stairsUp: { character: '<', foreground: '#CCCC56', background: '#B8963B' },
    stairsDown: { character: '>', foreground: '#CCCC56', background: '#B8963B' },
    corridor: { character: '"', foreground: '#CCCC56', background: '#B8963B' },
    closedDoor: { character: '+', foreground: '#CD853F', background: '#B8963B' },
    openDoor: { character: '/', foreground: '#CD853F', background: '#B8963B' },
    secretDoor: { character: '⇡', foreground: '#556B2F', background: '#B8963B',
        description: "A tree" },
    water: { character: '≈', foreground: '#4169E1', background: '#B8860B' }
});
Game.Tilesets.scrub = new Game.Tileset({
    ground: { character: '.', foreground: '#B8960B', background: '#BDB76B' },
    terrain: { character: '*', foreground: '#808000', background: '#BDB76B', passesLight: true,
        description: "A small, scrawny-looking plant" },
    blocked: { character: 'Ѧ', foreground: '#A0522D', background: '#BDB76B' },
    stairsUp: { character: '<', foreground: '#B8960B', background: '#BDB76B' },
    stairsDown: { character: '>', foreground: '#B8960B', background: '#BDB76B' },
    corridor: { character: '.', foreground: '#B8960B', background: '#BDB76B' },
    closedDoor: { character: '+', foreground: '#808000', background: '#BDB76B' },
    openDoor: { character: '/', foreground: '#808000', background: '#BDB76B' },
    secretDoor: { character: '*', foreground: '#808000', background: '#BDB76B',
        description: "A small, scrawny-looking plant" },
    water: { character: '~', foreground: '#4169E1', background: '#BDB76B' }
});
Game.Tilesets.coldscrub = new Game.Tileset({
    ground: { character: '.', foreground: '#556B2F', background: '#778F77' },
    terrain: { character: '*', foreground: '#123823', background: '#778F77', passesLight: true,
        description: "A small, scrawny-looking plant" },
    blocked: { character: 'Ѧ', foreground: '#595959', background: '#778F77' },
    stairsUp: { character: '<', foreground: '#556B2F', background: '#778F77' },
    stairsDown: { character: '>', foreground: '#556B2F', background: '#778F77' },
    corridor: { character: '.', foreground: '#556B2F', background: '#778F77' },
    closedDoor: { character: '+', foreground: '#123823', background: '#778F77' },
    openDoor: { character: '/', foreground: '#123823', background: '#778F77' },
    secretDoor: { character: '*', foreground: '#123823', background: '#778F77',
        description: "A small, scrawny-looking plant" },
    water: { character: '~', foreground: '#4682B4', background: '#778F77' }
});

/*
 "dungeon" tilesets
 */

// no parameters passed, since the constructor defaults are
// the original 'cave' tile definitions
Game.Tilesets.cave = new Game.Tileset({});

Game.Tilesets.tower = new Game.Tileset({
    floor: { character: '.', foreground: '#755', background: '#000' },
    wall: { character: '#', foreground: '#533', background: '#644', isBreakable: false },
    blocked: { character: '#', foreground: '#533', background: '#644', isBreakable: false },
    stairsUp: { character: '<', foreground: '#577' },
    stairsDown: { character: '>', foreground: '#577' },
    corridor: { character: ',', foreground: '#755' },
    closedDoor: { character: '+', foreground: '#577' },
    openDoor: { character: '/', foreground: '#577' },
    secretDoor: { character: '#', foreground: '#533', background: '#644' },
    water: { character: '≈', foreground: '#800' }
});

Game.Tilesets.iceCave = new Game.Tileset({
    floor: { character: '.', foreground: '#BCE', background: '#549' },
    wall: { character: '#', foreground: '#BCE', background: '#87CEFA' },
    blocked: { character: '▓', foreground: '#549', background: '#033' },
    stairsUp: { character: '<', foreground: '#BCE', background: '#549' },
    stairsDown: { character: '>', foreground: '#BCE', background: '#549' },
    corridor: { character: '.', foreground: '#BCE', background: '#549' },
    closedDoor: { character: '+', foreground: '#789' },
    openDoor: { character: '/', foreground: '#789' },
    secretDoor: { character: '#', foreground: '#BCE', background: '#87CEFA' },
    water: { character: '-', foreground: '#87CEFA', background: '#549' }
});
