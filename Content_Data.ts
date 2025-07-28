export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  genre: string;
  duration?: string;
  type: 'movie' | 'music' | 'game' | 'live';
}

export const trendingContent: ContentItem[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    subtitle: 'Epic sci-fi sequel',
    image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.9,
    genre: 'Sci-Fi',
    duration: '2h 46m',
    type: 'movie',
  },
  {
    id: '2',
    title: 'Taylor Swift - Midnights',
    subtitle: 'Latest album release',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.2,
    genre: 'Pop',
    duration: '44 mins',
    type: 'music',
  },
  {
    id: '3',
    title: 'Elden Ring',
    subtitle: 'Open-world fantasy RPG',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.5,
    genre: 'RPG',
    type: 'game',
  },
  {
    id: '4',
    title: 'Champions League Final',
    subtitle: 'Live sports event',
    image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.7,
    genre: 'Sports',
    type: 'live',
  },
];

export const movieContent: ContentItem[] = [
  {
    id: '5',
    title: 'Oppenheimer',
    subtitle: 'Biographical thriller',
    image: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.8,
    genre: 'Biography',
    duration: '3h 0m',
    type: 'movie',
  },
  {
    id: '6',
    title: 'Spider-Man: Across the Spider-Verse',
    subtitle: 'Animated superhero adventure',
    image: 'https://images.pexels.com/photos/1309899/pexels-photo-1309899.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.1,
    genre: 'Animation',
    duration: '2h 20m',
    type: 'movie',
  },
  {
    id: '7',
    title: 'The Batman',
    subtitle: 'Dark knight returns',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.5,
    genre: 'Action',
    duration: '2h 56m',
    type: 'movie',
  },
  {
    id: '8',
    title: 'Everything Everywhere All at Once',
    subtitle: 'Multiverse adventure',
    image: 'https://images.pexels.com/photos/1644755/pexels-photo-1644755.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.3,
    genre: 'Sci-Fi Comedy',
    duration: '2h 19m',
    type: 'movie',
  },
];

export const musicContent: ContentItem[] = [
  {
    id: '9',
    title: 'Bad Bunny - Un Verano Sin Ti',
    subtitle: 'Reggaeton hits',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.9,
    genre: 'Reggaeton',
    duration: '1h 23m',
    type: 'music',
  },
  {
    id: '10',
    title: 'Harry Styles - As It Was',
    subtitle: 'Pop sensation',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.7,
    genre: 'Pop Rock',
    duration: '2h 57m',
    type: 'music',
  },
  {
    id: '11',
    title: 'Beyoncé - Renaissance',
    subtitle: 'Dance-pop masterpiece',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.4,
    genre: 'Dance Pop',
    duration: '1h 2m',
    type: 'music',
  },
  {
    id: '12',
    title: 'Kendrick Lamar - Mr. Morale',
    subtitle: 'Hip-hop evolution',
    image: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.8,
    genre: 'Hip Hop',
    duration: '1h 13m',
    type: 'music',
  },
];

export const gameContent: ContentItem[] = [
  {
    id: '13',
    title: 'God of War Ragnarök',
    subtitle: 'Norse mythology epic',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.2,
    genre: 'Action RPG',
    type: 'game',
  },
  {
    id: '14',
    title: 'Horizon Forbidden West',
    subtitle: 'Post-apocalyptic adventure',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.9,
    genre: 'Open World',
    type: 'game',
  },
  {
    id: '15',
    title: 'FIFA 24',
    subtitle: 'Ultimate football experience',
    image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.3,
    genre: 'Sports',
    type: 'game',
  },
  {
    id: '16',
    title: 'Call of Duty: Modern Warfare III',
    subtitle: 'Tactical shooter',
    image: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.1,
    genre: 'FPS',
    type: 'game',
  },
];

export const liveContent: ContentItem[] = [
  {
    id: '17',
    title: 'Grammy Awards 2024',
    subtitle: 'Music industry celebration',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.6,
    genre: 'Awards Show',
    type: 'live',
  },
  {
    id: '18',
    title: 'NBA Finals',
    subtitle: 'Championship series',
    image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 9.0,
    genre: 'Basketball',
    type: 'live',
  },
  {
    id: '19',
    title: 'Coachella 2024',
    subtitle: 'Music festival live stream',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.8,
    genre: 'Music Festival',
    type: 'live',
  },
  {
    id: '20',
    title: 'The Game Awards',
    subtitle: 'Gaming industry honors',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 8.4,
    genre: 'Gaming Awards',
    type: 'live',
  },
];
