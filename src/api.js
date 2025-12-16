export const API_KEY = "9828b784-16a2-42fd-9b42-0e7ed15a77f4";
export const BASE = "https://api.cricapi.cc";

// ================== ENDPOINTS ==================
export const LIVE = `${BASE}/live?apikey=${API_KEY}`;

export const UPCOMING = `${BASE}/upcoming?apikey=${API_KEY}`;

export const RECENT = `${BASE}/recent?apikey=${API_KEY}`;

// (Optional – if you add scorecard later)
export const SCORECARD = (matchId) =>
  `${BASE}/scorecard/${matchId}?apikey=${API_KEY}`;
