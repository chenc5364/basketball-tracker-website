// Carmel Valley Spring 2026 Basketball League — Grades 3rd-4th Boys
// Team: Connor / Eliot / Nathan (Team #7 in standings)

export const TEAM_INFO = {
  teamName: "Connor / Eliot / Nathan",
  league: "Carmel Valley Spring 2026 Basketball League",
  division: "Grades 3rd-4th Boys",
  season: "Spring 2026",
  dates: "March 21 – May 30, 2026",
  grades: "Grades 3–4",
  gender: "Boys",
  coachNames: "Connor / Eliot / Nathan",
  locations: [
    {
      name: "Carmel Valley Recreation Center",
      address: "3777 Townsgate Drive, San Diego, CA 92130",
      shortName: "CVRC",
    },
    {
      name: "Ocean Air Park",
      address: "4770 Fairport Way, San Diego, CA 92130",
      shortName: "OAP",
    },
  ],
  sourceUrl:
    "https://www.mastersports.com/leagues/carmel-valley-summer-2026-spring-basketball-league/divisions/1089/teams/3907",
};

export const TEAMS = [
  "Catherine Hancock",
  "Luke Franey/Naveen Krishnamoorthy",
  "Marcus Lee/Derick Chi",
  "Kolt Sakofsky/Grant Clabo",
  "James McNally",
  "Jon Ramba",
  "Connor / Eliot / Nathan",
  "Sam Hangafarin",
];

export type GameResult = "W" | "L" | "upcoming" | "playoff";

export interface Game {
  id: number;
  pool: string;
  date: string;
  dateObj: string; // ISO date string for sorting
  time: string;
  location: string;
  court: string;
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  result?: GameResult;
  isPlayoff?: boolean;
  round?: string;
}

// Our team is "Connor / Eliot / Nathan"
// 7 regular season games from MasterSports schedule
export const GAMES: Game[] = [
  // Regular Season - 7 games total
  {
    id: 1,
    pool: "Pool 1",
    date: "Sat, Mar 21",
    dateObj: "2026-03-21",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Catherine Hancock",
    away: "Connor / Eliot / Nathan",
    homeScore: 20,
    awayScore: 26,
    result: "W",
  },
  {
    id: 2,
    pool: "Pool 6",
    date: "Wed, Apr 8",
    dateObj: "2026-04-08",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Jon Ramba",
    away: "Connor / Eliot / Nathan",
    homeScore: 30,
    awayScore: 33,
    result: "W",
  },
  {
    id: 3,
    pool: "Pool 10",
    date: "Wed, Apr 15",
    dateObj: "2026-04-15",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Connor / Eliot / Nathan",
    away: "James McNally",
    result: "upcoming",
  },
  {
    id: 4,
    pool: "Pool 9",
    date: "Sat, Apr 18",
    dateObj: "2026-04-18",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Jon Ramba",
    result: "upcoming",
  },
  {
    id: 5,
    pool: "Pool 15",
    date: "Sat, Apr 25",
    dateObj: "2026-04-25",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "James McNally",
    result: "upcoming",
  },
  {
    id: 6,
    pool: "Pool 25",
    date: "Wed, May 13",
    dateObj: "2026-05-13",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Connor / Eliot / Nathan",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 7,
    pool: "Pool 28",
    date: "Sat, May 16",
    dateObj: "2026-05-16",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Jon Ramba",
    result: "upcoming",
  },
  // Playoffs - TBD
  {
    id: 8,
    pool: "Round 1",
    date: "Wed, May 20",
    dateObj: "2026-05-20",
    time: "TBD",
    location: "TBD",
    court: "TBD",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 1",
  },
  {
    id: 9,
    pool: "Round 2",
    date: "Wed, May 27",
    dateObj: "2026-05-27",
    time: "TBD",
    location: "TBD",
    court: "TBD",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 2",
  },
  {
    id: 10,
    pool: "Championship",
    date: "Sat, May 30",
    dateObj: "2026-05-30",
    time: "TBD",
    location: "TBD",
    court: "TBD",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Championship",
  },
];

export const PRACTICE_SCHEDULE = [
  {
    id: 1,
    day: "Friday",
    date: "3/20",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 2,
    day: "Thursday",
    date: "3/27",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 3,
    day: "Friday",
    date: "4/3",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 4,
    day: "Friday",
    date: "4/10",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 5,
    day: "Friday",
    date: "4/17",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 6,
    day: "Friday",
    date: "4/24",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 7,
    day: "Friday",
    date: "5/1",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
  {
    id: 8,
    day: "Friday",
    date: "5/8",
    time: "5:00 - 6:00 PM",
    location: "Carmel Valley Recreation Center",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Court 2",
  },
];

export interface PracticeSession {
  id: number;
  day: string;
  date?: string;
  time: string;
  location: string;
  address: string;
  notes?: string;
}

export const ROSTER = [
  { name: "Armaan Grewal", number: 0, grade: "3rd", position: "" },
  { name: "Keenan Taylor", number: 0, grade: "3rd", position: "" },
  { name: "Sondre Momper", number: 0, grade: "3rd", position: "" },
  { name: "Aiden Chan", number: 0, grade: "3rd", position: "" },
  { name: "Liam Ashrafzadeh", number: 0, grade: "3rd", position: "" },
  { name: "Andrew Zhou", number: 0, grade: "3rd", position: "" },
  { name: "Eddie Viehmann", number: 0, grade: "3rd", position: "" },
  { name: "Sritan Sirimalle", number: 0, grade: "3rd", position: "" },
];

export const OVERVIEW_INFO = {
  teamName: "Connor / Eliot / Nathan",
  league: "Carmel Valley Spring 2026 Basketball League",
  season: "Spring 2026",
  division: "Grades 3rd-4th Boys",
  record: "0-0",
  seed: 7,
  locations: [
    "Carmel Valley Recreation Center - 3777 Townsgate Drive, San Diego, CA 92130",
    "Ocean Air Park - 4770 Fairport Way, San Diego, CA 92130",
  ],
  teamFormation: "Teams are formed via a draft process. All players must attend skills assessment.",
  uniforms: "All players receive a reversible jersey and shorts to keep at the end of the season.",
  awards: "Players on teams that finish 1st or 2nd place will receive a trophy.",
  gameDays: "Games are played on Wednesdays (4pm/5pm/6pm start times) and Saturdays (10am-12pm start times).",
};

export const GAME_VIDEOS: VideoEntry[] = [
  {
    id: 1,
    title: "Game 1: Catherine Hancock vs Connor / Eliot / Nathan - 1st Half",
    youtubeId: "t-HfzBTZbBg",
    youtubeUrl: "https://youtu.be/t-HfzBTZbBg?si=mYHYc4X3oMourbql",
    date: "Sat, Mar 21",
    opponent: "Catherine Hancock",
    description: "1st Half",
  },
  {
    id: 2,
    title: "Game 1: Catherine Hancock vs Connor / Eliot / Nathan - 2nd Half",
    youtubeId: "DvTxnrxoa8c",
    youtubeUrl: "https://youtu.be/DvTxnrxoa8c?si=mKoUK5b1AdZvmVaQ",
    date: "Sat, Mar 21",
    opponent: "Catherine Hancock",
    description: "2nd Half",
  },
  {
    id: 3,
    title: "Game 2: Jon Ramba vs Connor / Eliot / Nathan - Video 1",
    youtubeId: "_2oIIm_9QJQ",
    youtubeUrl: "https://youtu.be/_2oIIm_9QJQ",
    date: "Wed, Apr 8",
    opponent: "Jon Ramba",
    description: "Video 1",
  },
  {
    id: 4,
    title: "Game 2: Jon Ramba vs Connor / Eliot / Nathan - Video 2",
    youtubeId: "7tXkJ7yxsa8",
    youtubeUrl: "https://youtu.be/7tXkJ7yxsa8",
    date: "Wed, Apr 8",
    opponent: "Jon Ramba",
    description: "Video 2",
  },
  {
    id: 5,
    title: "Game 2: Jon Ramba vs Connor / Eliot / Nathan - Video 3",
    youtubeId: "usGVTVHxJko",
    youtubeUrl: "https://youtu.be/usGVTVHxJko",
    date: "Wed, Apr 8",
    opponent: "Jon Ramba",
    description: "Video 3",
  },
  {
    id: 6,
    title: "Game 2: Jon Ramba vs Connor / Eliot / Nathan - Video 4",
    youtubeId: "DXACNsxaSGM",
    youtubeUrl: "https://youtu.be/DXACNsxaSGM",
    date: "Wed, Apr 8",
    opponent: "Jon Ramba",
    description: "Video 4",
  },
];

export const OUR_TEAM = "Connor / Eliot / Nathan";

export const STANDINGS = [
  { seed: 1, team: "Kolt Sakofsky/Grant Clabo", w: 2, l: 0, t: 0, pd: 20, ps: 55, pa: 35, isOurTeam: false },
  { seed: 2, team: "Connor / Eliot / Nathan", w: 2, l: 0, t: 0, pd: 9, ps: 59, pa: 50, isOurTeam: true },
  { seed: 3, team: "James McNally", w: 1, l: 0, t: 0, pd: 7, ps: 24, pa: 17, isOurTeam: false },
  { seed: 4, team: "Jon Ramba", w: 1, l: 1, t: 0, pd: -2, ps: 60, pa: 62, isOurTeam: false },
  { seed: 5, team: "Marcus Lee/Derick Chi", w: 0, l: 1, t: 0, pd: -1, ps: 29, pa: 30, isOurTeam: false },
  { seed: 6, team: "Catherine Hancock", w: 0, l: 1, t: 0, pd: -6, ps: 20, pa: 26, isOurTeam: false },
  { seed: 7, team: "Sam Hangafarin", w: 0, l: 2, t: 0, pd: -12, ps: 43, pa: 55, isOurTeam: false },
  { seed: 8, team: "Luke Franey/Naveen Krishnamoorthy", w: 0, l: 1, t: 0, pd: -15, ps: 9, pa: 24, isOurTeam: false },
];

export interface VideoEntry {
  id: number;
  title: string;
  youtubeUrl?: string;
  youtubeId?: string;
  date: string;
  opponent?: string;
  description?: string;
}
