export interface TopAnime {
  pagination: Pagination;
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Datum {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: DatumType;
  source: string;
  episodes: number;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: Season | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Aired {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: Timezone | null;
  string: null | string;
}

export enum Timezone {
  AsiaTokyo = 'Asia/Tokyo',
}

export interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

export enum DemographicType {
  Anime = 'anime',
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export enum Rating {
  PG13Teens13OrOlder = 'PG-13 - Teens 13 or older',
  R17ViolenceProfanity = 'R - 17+ (violence & profanity)',
  RMildNudity = 'R+ - Mild Nudity',
}

export enum Season {
  Fall = 'fall',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}

export enum Status {
  FinishedAiring = 'Finished Airing',
}

export interface Title {
  type: TitleType;
  title: string;
}

export enum TitleType {
  Default = 'Default',
  English = 'English',
  French = 'French',
  German = 'German',
  Japanese = 'Japanese',
  Spanish = 'Spanish',
  Synonym = 'Synonym',
}

export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

export enum DatumType {
  Movie = 'Movie',
  Ova = 'OVA',
  Tv = 'TV',
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface Recommended {
  data: RecommendedData[];
}

export interface RecommendedData {
  entry: Entry;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Genre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface FavouriteList {
  data:       Favourite[];
  pagination: Pagination;
}

export interface Favourite {
  mal_id:          number;
  url:             string;
  images:          { [key: string]: Image };
  trailer:         Trailer;
  approved:        boolean;
  titles:          Title[];
  title:           string;
  title_english:   string;
  title_japanese:  string;
  title_synonyms:  string[];
  type:            string;
  source:          string;
  episodes:        number;
  status:          string;
  airing:          boolean;
  aired:           Aired;
  duration:        string;
  rating:          string;
  score:           number;
  scored_by:       number;
  rank:            number;
  popularity:      number;
  members:         number;
  favorites:       number;
  synopsis:        string;
  background:      string;
  season:          string;
  year:            number;
  broadcast:       Broadcast;
  producers:       Demographic[];
  licensors:       Demographic[];
  studios:         Demographic[];
  genres:          Demographic[];
  explicit_genres: Demographic[];
  themes:          Demographic[];
  demographics:    Demographic[];
}

export interface Aired {
  from: string;
  to:   string;
  prop: Prop;
}

export interface Prop {
  from:   From;
  to:     From;
  string: string;
}

export interface From {
  day:   number;
  month: number;
  year:  number;
}

export interface Broadcast {
  day:      string;
  time:     string;
  timezone: string;
  string:   string;
}

export interface Demographic {
  mal_id: number;
  type:   string;
  name:   string;
  url:    string;
}

export interface Image {
  image_url:       string;
  small_image_url: string;
  large_image_url: string;
}

export interface Title {
  type:  string;
  title: string;
}

export interface Trailer {
  youtube_id: string;
  url:        string;
  embed_url:  string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page:     boolean;
  items:             Items;
}

export interface Items {
  count:    number;
  total:    number;
  per_page: number;
}

