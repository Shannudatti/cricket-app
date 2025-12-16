export const API_KEY = "9828b784-16a2-42fd-9b42-0e7ed15a77f4";

export const BASE = "https://api.cricapi.com/v1";

export const LIVE_MATCHES = `${BASE}/currentMatches?apikey=${API_KEY}`;

export const ALL_MATCHES = `${BASE}/matches?apikey=${API_KEY}`;

export const SERIES_LIST = `${BASE}/series?apikey=${API_KEY}&offset=0`;

export const SCORECARD = (id) =>
  `${BASE}/match_scorecard?apikey=${API_KEY}&id=${id}`;
