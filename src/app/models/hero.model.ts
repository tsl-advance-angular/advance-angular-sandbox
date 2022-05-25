export interface Hero {
    id: string;
    name: string;
    powerstats: Powerstats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Image;
}

interface Powerstats {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
}

interface Biography {
    full_name: string;
    alter_egos: string;
    aliases: string[];
    place_of_birth: string;
    first_appearance: string;
    publisher: string;
    alignment: string;
}

interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eye_color: string;
    hair_color: string;
}

interface Work {
    occupation: string;
    base: string;
}

interface Connections {
    group_affiliation: string;
    relatives: string;
}

interface Image {
    url: string;
}