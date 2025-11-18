export const LANGUAGES = [
  { value: 'lt', icon: 'https://flagcdn.com/w40/lt.png', text: 'Lietuvių' },
  { value: 'en', icon: 'https://flagcdn.com/w40/us.png', text: 'English' },
  { value: 'es', icon: 'https://flagcdn.com/w40/es.png', text: 'Español' },
  { value: 'fr', icon: 'https://flagcdn.com/w40/fr.png', text: 'Français' },
  { value: 'de', icon: 'https://flagcdn.com/w40/de.png', text: 'Deutsch' },
  { value: 'it', icon: 'https://flagcdn.com/w40/it.png', text: 'Italiano' }
];

// Base structure with keys, icons, and colors
const STORY_BASE = {
  time: [
    { key: 'once_upon_a_time', icon: 'RiScrollToBottomLine', color: '#8B4513' },
    { key: 'future', icon: 'RiRocketLine', color: '#FF4500' },
    { key: 'today', icon: 'RiCalendarLine', color: '#1E90FF' },
    { key: 'winter', icon: 'RiSnowyLine', color: '#87CEEB' },
    { key: 'summer', icon: 'RiSunLine', color: '#FFD700' },
    { key: 'mysterious_night', icon: 'RiMoonLine', color: '#708090' },
    { key: 'hundred_years_ago', icon: 'RiTimeLine', color: '#696969' },
    { key: 'dream_kingdom', icon: 'RiSparklingLine', color: '#FFD700' },
    { key: 'sunny_morning', icon: 'RiSunLine', color: '#FFD700' },
    { key: 'autumn_afternoon', icon: 'RiLeafLine', color: '#FF8C00' },
    { key: 'moonlight', icon: 'RiMoonLine', color: '#708090' },
    { key: 'christmas', icon: 'RiTreeLine', color: '#228B22' }
  ],
  place: [
    { key: 'magical_forest', icon: 'RiTreeLine', color: '#228B22' },
    { key: 'castle', icon: 'RiBuildingLine', color: '#696969' },
    { key: 'space', icon: 'RiStarLine', color: '#FFD700' },
    { key: 'underwater', icon: 'RiWaterPercentLine', color: '#1E90FF' },
    { key: 'cloud_kingdom', icon: 'RiCloudLine', color: '#FFFFFF' },
    { key: 'candy_land', icon: 'RiCakeLine', color: '#FF69B4' },
    { key: 'underground_maze', icon: 'RiKeyLine', color: '#FFD700' },
    { key: 'crystal_cave', icon: 'RiVipDiamondLine', color: '#87CEEB' },
    { key: 'rainbow_bridge', icon: 'RiRainbowLine', color: '#9370DB' },
    { key: 'chocolate_factory', icon: 'RiBuilding2Line', color: '#8B4513' }
  ],
  character: [
    { key: 'princess_dragon', icon: 'RiVipCrownLine', color: '#FFD700' },
    { key: 'dwarves', icon: 'RiUserLine', color: '#1E90FF' },
    { key: 'talking_animals', icon: 'RiChat1Line', color: '#32CD32' },
    { key: 'wizards', icon: 'RiMagicLine', color: '#9370DB' },
    { key: 'robots', icon: 'RiRobotLine', color: '#696969' },
    { key: 'knight_fairy', icon: 'RiSwordLine', color: '#C0C0C0' },
    { key: 'flying_unicorn', icon: 'RiSparkling2Line', color: '#FF69B4' },
    { key: 'funny_troll', icon: 'RiGamepadLine', color: '#FF0000' },
    { key: 'magical_cat', icon: 'RiHeartLine', color: '#FF0000' },
    { key: 'little_astronaut', icon: 'RiUserLine', color: '#1E90FF' }
  ],
  mood: [
    { key: 'happy', icon: 'RiEmotionHappyLine', color: '#FFD700' },
    { key: 'adventurous', icon: 'RiMapPinLine', color: '#32CD32' },
    { key: 'mysterious', icon: 'RiEyeLine', color: '#9370DB' },
    { key: 'magical', icon: 'RiSparklingLine', color: '#FFD700' },
    { key: 'friendly', icon: 'RiTeamLine', color: '#1E90FF' },
    { key: 'romantic', icon: 'RiHeartLine', color: '#FF0000' },
    { key: 'exciting', icon: 'RiFlashlightLine', color: '#FFFFFF' },
    { key: 'full_of_magic', icon: 'RiFilmLine', color: '#9370DB' }
  ]
};

// Translations for each language
const TRANSLATIONS = {
  lt: {
    once_upon_a_time: 'Seniai seniai',
    future: 'Ateityje',
    today: 'Dabar',
    winter: 'Žiemą',
    summer: 'Vasarą',
    mysterious_night: 'Paslaptingą naktį',
    hundred_years_ago: 'Prieš šimtą metų',
    dream_kingdom: 'Sapnų karalystėje',
    sunny_morning: 'Saulėtą rytą',
    autumn_afternoon: 'Rudens popietę',
    moonlight: 'Mėnesienoje',
    christmas: 'Per Kalėdas',
    magical_forest: 'Stebuklingame miške',
    castle: 'Pilyje',
    space: 'Kosmose',
    underwater: 'Po vandeniu',
    cloud_kingdom: 'Debesų karalystėje',
    candy_land: 'Saldainių šalyje',
    underground_maze: 'Požemių labirinte',
    crystal_cave: 'Krištolo oloje',
    rainbow_bridge: 'Vaivorykštės tilte',
    chocolate_factory: 'Šokolado fabrike',
    princess_dragon: 'Princesė ir drakonas',
    dwarves: 'Nykštukai',
    talking_animals: 'Kalbantys gyvūnai',
    wizards: 'Burtininkai',
    robots: 'Robotai',
    knight_fairy: 'Drąsus riteris ir fėja',
    flying_unicorn: 'Skraidantis vienaragis',
    funny_troll: 'Linksmasis trolis',
    magical_cat: 'Stebuklingas katinas',
    little_astronaut: 'Mažasis astronautas',
    happy: 'Linksma',
    adventurous: 'Nuotykių',
    mysterious: 'Paslaptinga',
    magical: 'Stebuklinga',
    friendly: 'Draugiška',
    romantic: 'Romantiška',
    exciting: 'Jaudinanti',
    full_of_magic: 'Magijos kupina'
  },
  en: {
    once_upon_a_time: 'Once upon a time',
    future: 'In the future',
    today: 'Today',
    winter: 'In winter',
    summer: 'In summer',
    mysterious_night: 'On a mysterious night',
    hundred_years_ago: 'A hundred years ago',
    dream_kingdom: 'In the dream kingdom',
    sunny_morning: 'On a sunny morning',
    autumn_afternoon: 'On an autumn afternoon',
    moonlight: 'Under the moonlight',
    christmas: 'During Christmas',
    magical_forest: 'In a magical forest',
    castle: 'In a castle',
    space: 'In space',
    underwater: 'Underwater',
    cloud_kingdom: 'In the cloud kingdom',
    candy_land: 'In candy land',
    underground_maze: 'In an underground maze',
    crystal_cave: 'In a crystal cave',
    rainbow_bridge: 'On a rainbow bridge',
    chocolate_factory: 'In a chocolate factory',
    princess_dragon: 'Princess and dragon',
    dwarves: 'Dwarves',
    talking_animals: 'Talking animals',
    wizards: 'Wizards',
    robots: 'Robots',
    knight_fairy: 'Brave knight and fairy',
    flying_unicorn: 'Flying unicorn',
    funny_troll: 'Funny troll',
    magical_cat: 'Magical cat',
    little_astronaut: 'Little astronaut',
    happy: 'Happy',
    adventurous: 'Adventurous',
    mysterious: 'Mysterious',
    magical: 'Magical',
    friendly: 'Friendly',
    romantic: 'Romantic',
    exciting: 'Exciting',
    full_of_magic: 'Full of magic'
  },
  es: {
    once_upon_a_time: 'Érase una vez',
    future: 'En el futuro',
    today: 'Hoy',
    winter: 'En invierno',
    summer: 'En verano',
    mysterious_night: 'En una noche misteriosa',
    hundred_years_ago: 'Hace cien años',
    dream_kingdom: 'En el reino de los sueños',
    sunny_morning: 'En una mañana soleada',
    autumn_afternoon: 'En una tarde de otoño',
    moonlight: 'Bajo la luz de la luna',
    christmas: 'Durante la Navidad',
    magical_forest: 'En un bosque mágico',
    castle: 'En un castillo',
    space: 'En el espacio',
    underwater: 'Bajo el agua',
    cloud_kingdom: 'En el reino de las nubes',
    candy_land: 'En el país de los dulces',
    underground_maze: 'En un laberinto subterráneo',
    crystal_cave: 'En una cueva de cristal',
    rainbow_bridge: 'En un puente arcoíris',
    chocolate_factory: 'En una fábrica de chocolate',
    princess_dragon: 'Princesa y dragón',
    dwarves: 'Enanos',
    talking_animals: 'Animales que hablan',
    wizards: 'Magos',
    robots: 'Robots',
    knight_fairy: 'Caballero valiente y hada',
    flying_unicorn: 'Unicornio volador',
    funny_troll: 'Trol divertido',
    magical_cat: 'Gato mágico',
    little_astronaut: 'Pequeño astronauta',
    happy: 'Alegre',
    adventurous: 'Aventurera',
    mysterious: 'Misteriosa',
    magical: 'Mágica',
    friendly: 'Amigable',
    romantic: 'Romántica',
    exciting: 'Emocionante',
    full_of_magic: 'Llena de magia'
  },
  fr: {
    once_upon_a_time: 'Il était une fois',
    future: 'Dans le futur',
    today: 'Aujourd\'hui',
    winter: 'En hiver',
    summer: 'En été',
    mysterious_night: 'Dans une nuit mystérieuse',
    hundred_years_ago: 'Il y a cent ans',
    dream_kingdom: 'Dans le royaume des rêves',
    sunny_morning: 'Par un matin ensoleillé',
    autumn_afternoon: 'Par un après-midi d\'automne',
    moonlight: 'Sous la lumière de la lune',
    christmas: 'Pendant Noël',
    magical_forest: 'Dans une forêt magique',
    castle: 'Dans un château',
    space: 'Dans l\'espace',
    underwater: 'Sous l\'eau',
    cloud_kingdom: 'Dans le royaume des nuages',
    candy_land: 'Au pays des bonbons',
    underground_maze: 'Dans un labyrinthe souterrain',
    crystal_cave: 'Dans une grotte de cristal',
    rainbow_bridge: 'Sur un pont arc-en-ciel',
    chocolate_factory: 'Dans une fabrique de chocolat',
    princess_dragon: 'Princesse et dragon',
    dwarves: 'Nains',
    talking_animals: 'Animaux qui parlent',
    wizards: 'Sorciers',
    robots: 'Robots',
    knight_fairy: 'Chevalier courageux et fée',
    flying_unicorn: 'Licorne volante',
    funny_troll: 'Troll amusant',
    magical_cat: 'Chat magique',
    little_astronaut: 'Petit astronaute',
    happy: 'Joyeuse',
    adventurous: 'Aventureuse',
    mysterious: 'Mystérieuse',
    magical: 'Magique',
    friendly: 'Amicale',
    romantic: 'Romantique',
    exciting: 'Passionnante',
    full_of_magic: 'Pleine de magie'
  },
  de: {
    once_upon_a_time: 'Es war einmal',
    future: 'In der Zukunft',
    today: 'Heute',
    winter: 'Im Winter',
    summer: 'Im Sommer',
    mysterious_night: 'In einer geheimnisvollen Nacht',
    hundred_years_ago: 'Vor hundert Jahren',
    dream_kingdom: 'Im Traumkönigreich',
    sunny_morning: 'An einem sonnigen Morgen',
    autumn_afternoon: 'An einem Herbstnachmittag',
    moonlight: 'Im Mondlicht',
    christmas: 'Während Weihnachten',
    magical_forest: 'Im Zauberwald',
    castle: 'In einem Schloss',
    space: 'Im Weltraum',
    underwater: 'Unter Wasser',
    cloud_kingdom: 'Im Wolkenkönigreich',
    candy_land: 'Im Süßigkeitenland',
    underground_maze: 'In einem unterirdischen Labyrinth',
    crystal_cave: 'In einer Kristallhöhle',
    rainbow_bridge: 'Auf einer Regenbogenbrücke',
    chocolate_factory: 'In einer Schokoladenfabrik',
    princess_dragon: 'Prinzessin und Drache',
    dwarves: 'Zwerge',
    talking_animals: 'Sprechende Tiere',
    wizards: 'Zauberer',
    robots: 'Roboter',
    knight_fairy: 'Tapferer Ritter und Fee',
    flying_unicorn: 'Fliegendes Einhorn',
    funny_troll: 'Lustiger Troll',
    magical_cat: 'Zauberkatze',
    little_astronaut: 'Kleiner Astronaut',
    happy: 'Fröhlich',
    adventurous: 'Abenteuerlich',
    mysterious: 'Geheimnisvoll',
    magical: 'Magisch',
    friendly: 'Freundlich',
    romantic: 'Romantisch',
    exciting: 'Aufregend',
    full_of_magic: 'Voller Magie'
  },
  it: {
    once_upon_a_time: 'C\'era una volta',
    future: 'Nel futuro',
    today: 'Oggi',
    winter: 'In inverno',
    summer: 'In estate',
    mysterious_night: 'In una notte misteriosa',
    hundred_years_ago: 'Cento anni fa',
    dream_kingdom: 'Nel regno dei sogni',
    sunny_morning: 'In una mattina soleggiata',
    autumn_afternoon: 'In un pomeriggio d\'autunno',
    moonlight: 'Sotto la luce della luna',
    christmas: 'Durante il Natale',
    magical_forest: 'In una foresta magica',
    castle: 'In un castello',
    space: 'Nello spazio',
    underwater: 'Sott\'acqua',
    cloud_kingdom: 'Nel regno delle nuvole',
    candy_land: 'Nel paese dei dolci',
    underground_maze: 'In un labirinto sotterraneo',
    crystal_cave: 'In una grotta di cristallo',
    rainbow_bridge: 'Su un ponte arcobaleno',
    chocolate_factory: 'In una fabbrica di cioccolato',
    princess_dragon: 'Principessa e drago',
    dwarves: 'Nani',
    talking_animals: 'Animali parlanti',
    wizards: 'Maghi',
    robots: 'Robot',
    knight_fairy: 'Cavaliere coraggioso e fata',
    flying_unicorn: 'Unicorno volante',
    funny_troll: 'Troll divertente',
    magical_cat: 'Gatto magico',
    little_astronaut: 'Piccolo astronauta',
    happy: 'Allegra',
    adventurous: 'Avventurosa',
    mysterious: 'Misteriosa',
    magical: 'Magica',
    friendly: 'Amichevole',
    romantic: 'Romantica',
    exciting: 'Emozionante',
    full_of_magic: 'Piena di magia'
  }
};

// Type definitions
interface StoryOption {
  value: string;
  icon: string;
  text: string;
  color: string;
}

interface StoryCategory {
  time: StoryOption[];
  place: StoryOption[];
  character: StoryOption[];
  mood: StoryOption[];
}

type StoryOptionsType = Record<string, StoryCategory>;

export const LOADING_TRANSLATIONS: Record<string, { loadingMessages: string[]; creatingStory: string }> = {
  lt: {
    loadingMessages: [
      "Renkamos idėjos... ✨",
      "Mezgama istorija... 🧶",
      "Kuriami veikėjai... 👥",
      "Piešiami vaizdai... 🎨",
      "Dėliojami žodžiai... 📝",
      "Beriami burtai... 🪄",
      "Pridedama magijos... ✨",
      "Tikrinama gramatika... 📚",
      "Puošiama istorija... 🎭",
      "Baigiami paskutiniai potėpiai... 🖌️"
    ],
    creatingStory: 'Kuriama pasaka...'
  },
  en: {
    loadingMessages: [
      "Gathering ideas... ✨",
      "Weaving the story... 🧶",
      "Creating characters... 👥",
      "Painting images... 🎨",
      "Arranging words... 📝",
      "Casting spells... 🪄",
      "Adding magic... ✨",
      "Checking grammar... 📚",
      "Decorating the story... 🎭",
      "Finishing final touches... 🖌️"
    ],
    creatingStory: 'Creating story...'
  },
  es: {
    loadingMessages: [
      "Reuniendo ideas... ✨",
      "Tejiendo la historia... 🧶",
      "Creando personajes... 👥",
      "Pintando imágenes... 🎨",
      "Organizando palabras... 📝",
      "Lanzando hechizos... 🪄",
      "Agregando magia... ✨",
      "Revisando gramática... 📚",
      "Decorando la historia... 🎭",
      "Terminando toques finales... 🖌️"
    ],
    creatingStory: 'Creando cuento...'
  },
  fr: {
    loadingMessages: [
      "Rassemblant les idées... ✨",
      "Tissant l'histoire... 🧶",
      "Créant les personnages... 👥",
      "Peignant les images... 🎨",
      "Organisant les mots... 📝",
      "Lançant des sorts... 🪄",
      "Ajoutant de la magie... ✨",
      "Vérifiant la grammaire... 📚",
      "Décorant l'histoire... 🎭",
      "Terminant les touches finales... 🖌️"
    ],
    creatingStory: 'Créant l\'histoire...'
  },
  de: {
    loadingMessages: [
      "Ideen sammeln... ✨",
      "Die Geschichte weben... 🧶",
      "Charaktere erstellen... 👥",
      "Bilder malen... 🎨",
      "Wörter anordnen... 📝",
      "Zauber wirken... 🪄",
      "Magie hinzufügen... ✨",
      "Grammatik überprüfen... 📚",
      "Die Geschichte dekorieren... 🎭",
      "Letzte Feinheiten abschließen... 🖌️"
    ],
    creatingStory: 'Geschichte erstellen...'
  },
  it: {
    loadingMessages: [
      "Raccogliendo idee... ✨",
      "Tessendo la storia... 🧶",
      "Creando personaggi... 👥",
      "Dipingendo immagini... 🎨",
      "Organizzando parole... 📝",
      "Lanciando incantesimi... 🪄",
      "Aggiungendo magia... ✨",
      "Controllando grammatica... 📚",
      "Decorando la storia... 🎭",
      "Completando i tocchi finali... 🖌️"
    ],
    creatingStory: 'Creando storia...'
  }
};

// Generate STORY_OPTIONS dynamically
export const STORY_OPTIONS: StoryOptionsType = Object.keys(TRANSLATIONS).reduce((acc, lang) => {
  const langKey = lang as keyof typeof TRANSLATIONS;
  acc[langKey] = {
    time: STORY_BASE.time.map(item => ({
      value: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      icon: item.icon,
      text: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      color: item.color
    })),
    place: STORY_BASE.place.map(item => ({
      value: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      icon: item.icon,
      text: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      color: item.color
    })),
    character: STORY_BASE.character.map(item => ({
      value: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      icon: item.icon,
      text: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      color: item.color
    })),
    mood: STORY_BASE.mood.map(item => ({
      value: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      icon: item.icon,
      text: TRANSLATIONS[langKey][item.key as keyof typeof TRANSLATIONS.lt],
      color: item.color
    }))
  };
  return acc;
}, {} as StoryOptionsType);