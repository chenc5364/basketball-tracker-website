export interface Game {
  id: number;
  pool: string;
  date: string;
  dateObj: string;
  time: string;
  location: string;
  court: string;
  home?: string;
  away?: string;
  homeScore?: number;
  awayScore?: number;
  result?: "W" | "L" | "upcoming";
  isPlayoff?: boolean;
  round?: string;
}

export interface Practice {
  id: number;
  date: string;
  dateObj: string;
  time: string;
  location: string;
}

export interface Standing {
  seed: number;
  team: string;
  w: number;
  l: number;
  t: number;
  pd: number;
  ps: number;
  pa: number;
  isOurTeam: boolean;
}

export interface VideoEntry {
  youtubeId: string;
  title: string;
  description: string;
  opponent?: string;
  date?: string;
}

// Our team is "Connor / Eliot / Nathan"
// 7 regular season games only
export const GAMES: Game[] = [
  // Past Games (Completed)
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
  // Upcoming Games
  {
    id: 3,
    pool: "Pool 5",
    date: "Sat, Apr 11",
    dateObj: "2026-04-11",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "James McNally",
    result: "upcoming",
  },
  {
    id: 4,
    pool: "Pool 10",
    date: "Wed, Apr 15",
    dateObj: "2026-04-15",
    time: "6:15 PM",
    location: "Ocean Air Park",
    court: "West Court",
    away: "James McNally",
    result: "upcoming",
  },
  {
    id: 5,
    pool: "Pool 12",
    date: "Sat, Apr 18",
    dateObj: "2026-04-18",
    time: "11:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    home: "Connor / Eliot / Nathan",
    away: "Sam Hangafarin",
    result: "upcoming",
  },
  {
    id: 6,
    pool: "Pool 15",
    date: "Sat, Apr 25",
    dateObj: "2026-04-25",
    time: "10:30 AM",
    location: "Carmel Valley Recreation Center",
    court: "Court 1 (North)",
    away: "James McNally",
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
];

export const PRACTICES: Practice[] = [
  {
    id: 1,
    date: "Fri, Mar 20",
    dateObj: "2026-03-20",
    time: "4:00 PM",
    location: "Carmel Valley Recreation Center",
  },
  {
    id: 2,
    date: "Wed, Mar 27",
    dateObj: "2026-03-27",
    time: "4:00 PM",
    location: "Carmel Valley Recreation Center",
  },
  {
    id: 3,
    date: "Wed, Apr 3",
    dateObj: "2026-04-03",
    time: "4:00 PM",
    location: "Carmel Valley Recreation Center",
  },
];

export const STANDINGS: Standing[] = [
  {
    seed: 1,
    team: "Kolt Sakofsky/Grant Clabo",
    w: 2,
    l: 0,
    t: 0,
    pd: 20,
    ps: 55,
    pa: 35,
    isOurTeam: false,
  },
  {
    seed: 2,
    team: "James McNally",
    w: 2,
    l: 0,
    t: 0,
    pd: 14,
    ps: 42,
    pa: 28,
    isOurTeam: false,
  },
  {
    seed: 3,
    team: "Connor / Eliot / Nathan",
    w: 2,
    l: 0,
    t: 0,
    pd: 9,
    ps: 59,
    pa: 50,
    isOurTeam: true,
  },
  {
    seed: 4,
    team: "Marcus Lee/Derick Chi",
    w: 1,
    l: 1,
    t: 0,
    pd: 8,
    ps: 51,
    pa: 43,
    isOurTeam: false,
  },
  {
    seed: 5,
    team: "Jon Ramba",
    w: 1,
    l: 1,
    t: 0,
    pd: -2,
    ps: 60,
    pa: 62,
    isOurTeam: false,
  },
  {
    seed: 6,
    team: "Sam Hangafarin",
    w: 0,
    l: 2,
    t: 0,
    pd: -12,
    ps: 43,
    pa: 55,
    isOurTeam: false,
  },
  {
    seed: 7,
    team: "Catherine Hancock",
    w: 0,
    l: 2,
    t: 0,
    pd: -13,
    ps: 31,
    pa: 44,
    isOurTeam: false,
  },
  {
    seed: 8,
    team: "Luke Franey/Naveen Krishnamoorthy",
    w: 0,
    l: 2,
    t: 0,
    pd: -24,
    ps: 22,
    pa: 46,
    isOurTeam: false,
  },
];

export const GAME_VIDEOS: VideoEntry[] = [
  {
    youtubeId: "example1",
    title: "Video 1",
    description: "Video 1",
    opponent: "Catherine Hancock",
    date: "Sat, Mar 21",
  },
  {
    youtubeId: "example2",
    title: "Video 2",
    description: "Video 2",
    opponent: "Catherine Hancock",
    date: "Sat, Mar 21",
  },
  {
    youtubeId: "_2oIIm_9QJQ",
    title: "Video 1",
    description: "Video 1",
    opponent: "Jon Ramba",
    date: "Wed, Apr 8",
  },
  {
    youtubeId: "7tXkJ7yxsa8",
    title: "Video 2",
    description: "Video 2",
    opponent: "Jon Ramba",
    date: "Wed, Apr 8",
  },
  {
    youtubeId: "usGVTVHxJko",
    title: "Video 3",
    description: "Video 3",
    opponent: "Jon Ramba",
    date: "Wed, Apr 8",
  },
  {
    youtubeId: "DXACNsxaSGM",
    title: "Video 4",
    description: "Video 4",
    opponent: "Jon Ramba",
    date: "Wed, Apr 8",
  },
];

export const ROSTER = [
  { name: "Player roster to be provided by coach" },
];
