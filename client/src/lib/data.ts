// Basketball Tracker Data
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
  "Connor / Eliot / Nathan",
  "Jon Ramba",
  "Connor Chen / Nathan Chang / Eliot D'Argenio",
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
// result is from our team's perspective
export const GAMES: Game[] = [
  // Regular Season
  {
    id: 1,
    pool: "Pool 1",
    date: "Sat, Mar 21",
    dateObj: "2026-03-21",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Catherine Hancock",
    away: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    result: "upcoming",
  },
  {
    id: 2,
    pool: "Pool 2",
    date: "Sat, Mar 21",
    dateObj: "2026-03-21",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 3,
    pool: "Pool 3",
    date: "Wed, Mar 25",
    dateObj: "2026-03-25",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Jon Ramba",
    away: "Marcus Lee/Derick Chi",
    result: "upcoming",
  },
  {
    id: 4,
    pool: "Pool 4",
    date: "Wed, Mar 25",
    dateObj: "2026-03-25",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Kolt Sakofsky/Grant Clabo",
    away: "Luke Franey/Naveen Krishnamoorthy",
    result: "upcoming",
  },
  {
    id: 5,
    pool: "Pool 5",
    date: "Wed, Apr 8",
    dateObj: "2026-04-08",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Connor / Eliot / Nathan",
    away: "Catherine Hancock",
    result: "upcoming",
  },
  {
    id: 6,
    pool: "Pool 6",
    date: "Wed, Apr 8",
    dateObj: "2026-04-08",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Jon Ramba",
    away: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    result: "upcoming",
  },
  {
    id: 7,
    pool: "Pool 7",
    date: "Sat, Apr 11",
    dateObj: "2026-04-11",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Kolt Sakofsky/Grant Clabo",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 8,
    pool: "Pool 8",
    date: "Sat, Apr 11",
    dateObj: "2026-04-11",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Luke Franey/Naveen Krishnamoorthy",
    away: "Marcus Lee/Derick Chi",
    result: "upcoming",
  },
  {
    id: 9,
    pool: "Pool 9",
    date: "Wed, Apr 15",
    dateObj: "2026-04-15",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Catherine Hancock",
    away: "Jon Ramba",
    result: "upcoming",
  },
  {
    id: 10,
    pool: "Pool 10",
    date: "Wed, Apr 15",
    dateObj: "2026-04-15",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Kolt Sakofsky/Grant Clabo",
    away: "Connor / Eliot / Nathan",
    result: "upcoming",
  },
  {
    id: 11,
    pool: "Pool 11",
    date: "Sat, Apr 18",
    dateObj: "2026-04-18",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Luke Franey/Naveen Krishnamoorthy",
    away: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    result: "upcoming",
  },
  {
    id: 12,
    pool: "Pool 12",
    date: "Sat, Apr 18",
    dateObj: "2026-04-18",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Marcus Lee/Derick Chi",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 13,
    pool: "Pool 13",
    date: "Wed, Apr 22",
    dateObj: "2026-04-22",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Kolt Sakofsky/Grant Clabo",
    away: "Catherine Hancock",
    result: "upcoming",
  },
  {
    id: 14,
    pool: "Pool 14",
    date: "Wed, Apr 22",
    dateObj: "2026-04-22",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Luke Franey/Naveen Krishnamoorthy",
    away: "Jon Ramba",
    result: "upcoming",
  },
  {
    id: 15,
    pool: "Pool 15",
    date: "Sat, Apr 25",
    dateObj: "2026-04-25",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Marcus Lee/Derick Chi",
    away: "Connor / Eliot / Nathan",
    result: "upcoming",
  },
  {
    id: 16,
    pool: "Pool 16",
    date: "Sat, Apr 25",
    dateObj: "2026-04-25",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Sam Hangafarin",
    away: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    result: "upcoming",
  },
  {
    id: 17,
    pool: "Pool 17",
    date: "Wed, Apr 29",
    dateObj: "2026-04-29",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Catherine Hancock",
    away: "Luke Franey/Naveen Krishnamoorthy",
    result: "upcoming",
  },
  {
    id: 18,
    pool: "Pool 18",
    date: "Wed, Apr 29",
    dateObj: "2026-04-29",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Marcus Lee/Derick Chi",
    away: "Kolt Sakofsky/Grant Clabo",
    result: "upcoming",
  },
  {
    id: 19,
    pool: "Pool 19",
    date: "Sat, May 2",
    dateObj: "2026-05-02",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Sam Hangafarin",
    away: "Jon Ramba",
    result: "upcoming",
  },
  {
    id: 20,
    pool: "Pool 20",
    date: "Sat, May 2",
    dateObj: "2026-05-02",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor Chen / Nathan Chang / Eliot D'Argenio",
    away: "Connor / Eliot / Nathan",
    result: "upcoming",
  },
  {
    id: 21,
    pool: "Pool 21",
    date: "Wed, May 6",
    dateObj: "2026-05-06",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Marcus Lee/Derick Chi",
    away: "Catherine Hancock",
    result: "upcoming",
  },
  {
    id: 22,
    pool: "Pool 22",
    date: "Wed, May 6",
    dateObj: "2026-05-06",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Sam Hangafarin",
    away: "Luke Franey/Naveen Krishnamoorthy",
    result: "upcoming",
  },
  {
    id: 23,
    pool: "Pool 23",
    date: "Sat, May 9",
    dateObj: "2026-05-09",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    away: "Kolt Sakofsky/Grant Clabo",
    result: "upcoming",
  },
  {
    id: 24,
    pool: "Pool 24",
    date: "Sat, May 9",
    dateObj: "2026-05-09",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Jon Ramba",
    result: "upcoming",
  },
  {
    id: 25,
    pool: "Pool 25",
    date: "Wed, May 13",
    dateObj: "2026-05-13",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Catherine Hancock",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 26,
    pool: "Pool 26",
    date: "Wed, May 13",
    dateObj: "2026-05-13",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "Connor Chen/Nathan Chang/Eliot D'Argenio",
    away: "Marcus Lee/Derick Chi",
    result: "upcoming",
  },
  {
    id: 27,
    pool: "Pool 27",
    date: "Sat, May 16",
    dateObj: "2026-05-16",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Luke Franey/Naveen Krishnamoorthy",
    result: "upcoming",
  },
  {
    id: 28,
    pool: "Pool 28",
    date: "Sat, May 16",
    dateObj: "2026-05-16",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Jon Ramba",
    away: "Kolt Sakofsky/Grant Clabo",
    result: "upcoming",
  },
  // Playoffs
  {
    id: 29,
    pool: "Round 1",
    date: "Wed, May 20",
    dateObj: "2026-05-20",
    time: "4:00 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 1",
  },
  {
    id: 30,
    pool: "Round 1",
    date: "Wed, May 20",
    dateObj: "2026-05-20",
    time: "4:00 PM",
    location: "Ocean Air Park",
    court: "East Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 1",
  },
  {
    id: 31,
    pool: "Round 1",
    date: "Wed, May 20",
    dateObj: "2026-05-20",
    time: "5:00 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 1",
  },
  {
    id: 32,
    pool: "Round 1",
    date: "Wed, May 20",
    dateObj: "2026-05-20",
    time: "5:00 PM",
    location: "Ocean Air Park",
    court: "East Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 1",
  },
  {
    id: 33,
    pool: "Round 2",
    date: "Wed, May 27",
    dateObj: "2026-05-27",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 2",
  },
  {
    id: 34,
    pool: "Round 2",
    date: "Wed, May 27",
    dateObj: "2026-05-27",
    time: "5:15 PM",
    location: "Ocean Air Park",
    court: "East Court",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Round 2",
  },
  {
    id: 35,
    pool: "Championship",
    date: "Sat, May 30",
    dateObj: "2026-05-30",
    time: "9:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "TBD",
    away: "TBD",
    result: "playoff",
    isPlayoff: true,
    round: "Championship",
  },
];

// Our team's games only
export const OUR_GAMES = GAMES.filter(
  (g) => g.home === "Connor / Eliot / Nathan" || g.away === "Connor / Eliot / Nathan"
);

export interface Standing {
  seed: number;
  team: string;
  w: number;
  l: number;
  t: number;
  pd: number;
  ps: number;
  pa: number;
  isOurTeam?: boolean;
}

export const STANDINGS: Standing[] = [
  { seed: 1, team: "Catherine Hancock", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 2, team: "Luke Franey/Naveen Krishnamoorthy", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 3, team: "Marcus Lee/Derick Chi", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 4, team: "Kolt Sakofsky/Grant Clabo", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 5, team: "Jon Ramba", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 6, team: "Connor Chen/Nathan Chang/Eliot D'Argenio", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
  { seed: 7, team: "Connor / Eliot / Nathan", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0, isOurTeam: true },
  { seed: 8, team: "Sam Hangafarin", w: 0, l: 0, t: 0, pd: 0, ps: 0, pa: 0 },
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

// Practice schedule — placeholder until user provides details
export const PRACTICE_SCHEDULE: PracticeSession[] = [
  {
    id: 1,
    day: "TBD",
    time: "TBD",
    location: "Carmel Valley Recreation Center or nearby location",
    address: "3777 Townsgate Drive, San Diego, CA 92130",
    notes: "Practice schedule to be determined by coach. Check back for updates.",
  },
];

export interface Player {
  number?: string;
  name: string;
  grade?: string;
  position?: string;
}

// Roster — placeholder until user provides details
export const ROSTER: Player[] = [
  { name: "Player roster to be provided by coach", grade: "3rd–4th" },
];

export interface VideoEntry {
  id: string;
  title: string;
  youtubeId: string;
  date: string;
  opponent?: string;
  description?: string;
}

// Game videos — placeholder until user provides YouTube links
export const GAME_VIDEOS: VideoEntry[] = [];

export const OVERVIEW_INFO = {
  skillsAssessment: {
    date: "Wednesday, March 11th",
    location: "Ocean Air Rec Center",
    times: [
      "4:30 PM — Grades 1st-2nd Coed",
      "5:30 PM — Grades 3rd-4th Boys (last name A–M)",
      "6:00 PM — Grades 3rd-4th Boys (last name N–Z)",
      "6:30 PM — Grades 5th-6th Boys (last name A–M)",
      "7:00 PM — Grades 5th-6th Boys (last name N–Z)",
      "7:30 PM — Grades 7th-8th Boys",
    ],
  },
  gameDays:
    "Games are played on Wednesday evenings and Saturday mornings at Carmel Valley Recreation Center. Wednesdays: ~4PM/5PM/6PM. Saturdays: ~10AM–12PM.",
  practiceInfo:
    "Practice days/times are determined by the team coach. All practices will be held outdoors at Carmel Valley Rec Center or another nearby location.",
  teamFormation:
    "All teams are formed via a draft process. Players must attend the skills assessment. Siblings are guaranteed to play on the same team unless otherwise requested.",
  uniforms:
    "All players receive a reversible jersey and a pair of shorts to keep at the end of the season.",
  awards:
    "Players on teams finishing 1st or 2nd place will receive a trophy at the end of the season.",
  contact: "Ryan Conroy — Ryan@MasterSports.com",
};
