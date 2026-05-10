
export const availableEmojis = ['🤮', '😭', '😳', '🥲', '🥱', '🥺', '🫤', '😥', '😑', '🏳️‍⚧️', '🏳️‍🌈', '🚩'];
export const availableMotd = [
  'Heute wird wieder ein Kacktag.',
  'Tipp: Bis zum dritten Tag gibt es keine Attestpflicht',
  'Manchmal hört ein Schultag auch früher auf als im Stundenplan',
  'Pass auf! Schulprojekte sind oft Zeitverschwendung',
  'Setze deine Energiepunkte sinnvoll ein.',
  'Hinweis: Taktisches Überspringen von Stunden wirkt sich positiv auf dein HP aus',
  'Achtung! Hausaufgaben sind Side Quests. Verschwende nicht zu viel Zeit mit ihnen.',
  'Tipp: Die NPCs können dir behilflich sein. Frage sie zum Beispiel nach Hausaufgaben.',
  'Tipp: Du kannst den Raum währrend des Unterrichts jederzeit verlassen',
  'Hinweis: Der Schülerladen öffnet nur selten. Verpasse es nicht!',
  'Tip: Sleep in class to save energy',
  "You can't carry anything after your backpack is full.",
  'Forgot to study for a test? Call in a bomb threat!',
  'every 60 seconds in Africa, a minute passes.',
  'Enemies can’t see or shoot through walls.',
  "Remember, the rule isn't to not do it, the rule is to not get caught",
  'I don’t know, can you use the bathroom?',
  'Achtung: Ab Level 25 endet die Low-Level-Protection und du musst du deine Krankenversicherungsbeiträge selbst bezahlen.',
  'Die Enten im Park sind kostenlos.',
  'Kranplätze müssen verdichtet sein.',
  'Trete aus der Kirche aus, um Kirchensteuer zu sparen',
  'Durch Handtücher können jegliche Sitzflächen reserviert werden.',
  'Die Gelbe Tonne ist nur für Verpackungsmaterial',
  'Es bleibt alles hier so wie es ist.',
  'Das geht vorbei, doch was ist wenn nicht?',
  'Nett hier. aber waren sie schon mal in Baden-Württenberg?',
  'Ein Gefängnisausbruch ist straffrei.',
  'FCK AFD',
  'Du willst nach Hause? Geh. Morgen ist auch noch ein Tag.',
  'Schlaf > Schule.',
  'Der Unterricht ist zum Essen und auf Klo gehen. Flasche auffüllen auch. Verschwende nicht die Pause damit.',
  'Antworten ausdenken > Lernen',
  'Merz Leck Eier 🥚',
  'Siamo tutti anitfascisti',
  'Free Palestine 🇵🇸',
  'Jugend, Zukunft, Sozialismus',
  'Liebe Grüße von Lea',
  'Ach mein, dein... Das sind doch bürgerliche Kategorien',
  'Wer anderen eine Grube gräbt, braucht eine Baugenehmigung',
  'We don’t make Mistakes, we have Happy Accident’s. - Bob Ross',
  'Es jibt sone und solche, und dann jibt es noch janz andre, aba dit sind die Schlimmstn - Herta',
  'Warum liegt hier überhaupt Stroh?',
  '"Was ist das? - Das ist blaues Licht - und was macht es? - Es leuchtet blau" - Deutsche Hochschule der Polizei.',
  'I dont wanna live in a world were Kindness is a sign of weakness',
  'europäische Blauhaarkatze',
  'Niemand will an dein Schnitzel, Alice',
  'gLaUben kAnnst dU IN DEr kiRCHE',
  'Dit is ‘ne freundliche Diktatur hier.',
  'I just keep trying things and it keeps working somehow',
  'Frühstück!',
  '🏳️‍🌈🏳️‍🌈🏳️‍🌈',
  'Hurra diese Welt geht unter',
  'Kein Gott, Kein Staat, Kein Patriarchat',
  'Etwas mit Heimatministerium kann für mich keine Heimat sein',
  'Wir träumen von Friedenm, doch erst müssen wir gewinnen!',
  '161',
  'Drei Schüsse in die Luft',
  'Bang Bang Bang',
  'Die Revolution oder Berlin Tag und Nacht?',
  'Ding Dong. Es klingelt. Ich gehe an die Tür und öffne. Vor meiner Nase steht ein Känguru.',
  'Diese französischen Bulldoggen fliegen nicht so gut, die verhalten sich aerodynamisch ungeschickt.',
  'Du denkst vielleicht du bist hart, aber ich bin Herta!',
  'Immer noch besser als bei euch zu sein',
  'Oh da gibt es einen Unterschied. Die einen zünden Ausländer an, die anderen Autos.',
  'Schon mal darüber nachgedacht, dass es von "uninformiert" kein langer Weg zu "uniformiert" ist?',
  'Man darf jetzt nicht alles so schlecht reden, wie es wirklich war.',
  'Das ist alles ein soziales Experiment hier',
  'Bitte wählt zumindest nicht die AfD digga'
];
export const hourTimes = {
  start: ["-", "7:55", "8:40", "9:45", "10:30", "11:35", "12:20", "13:25", "14:10", "15:05", "15:50"],
  end: ["-", "8:40", "9:25", "10:30", "11:15", "12:20", "13:05", "14:10", "14:55", "15:50", "16:35"]
}

export const hourStartTimesRaw = [
  [5, 0],
  [7, 55],
  [8, 40],
  [9, 45],
  [10, 30],
  [11, 35],
  [12, 20],
  [13, 25],
  [14, 10],
  [15, 5],
  [15, 50],
  [17, 0],
  [18, 0],
  [19, 0],
  [20, 0],
  [21, 0],
  [22, 0]
]

export const hourEndTimesRaw = [
  [6, 0],
  [8, 40],
  [9, 25],
  [10, 30],
  [11, 15],
  [12, 20],
  [13, 5],
  [14, 10],
  [14, 55],
  [15, 50],
  [16, 35],
  [18, 0],
  [19, 0],
  [20, 0],
  [21, 0],
  [22, 0],
  [23, 0],
]

// Source - https://stackoverflow.com/a/8831937
// Posted by Barak, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-11, License - CC BY-SA 4.0

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


function getDateBasedIndex(maxIndex: number) {
  console.log("yippee");
  const today = new Date();
  // this gives us a new deterministic index every two hours
  const sum = Math.abs(hashCode([today.getUTCDate(), today.getUTCMonth(), today.getUTCFullYear(), Math.floor(today.getUTCHours() / 2)].join())) % 32;

  console.log("todays magic num",sum);
  console.log("todays index", sum % maxIndex, "max was", maxIndex)

  return sum % maxIndex
}

export const choosenEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
export const choosenMotd = new Date().getHours() > 1 && new Date().getHours() < 4 ? "Digga bitte geh schlafen einfach" : availableMotd[getDateBasedIndex(availableMotd.length)];

