import SpotifyWebApi from 'spotify-web-api-node';

if (!process.env.SPOTIFY_CLIENT_ID) {
  throw new Error('Missing SPOTIFY_CLIENT_ID environment variable');
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error('Missing SPOTIFY_CLIENT_SECRET environment variable');
}

if (!process.env.SPOTIFY_REDIRECT_URI) {
  throw new Error('Missing SPOTIFY_REDIRECT_URI environment variable');
}

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

export const scopes = [
  'user-read-private',
  'user-read-email',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-top-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
];

export const getAuthUrl = () => {
  return spotifyApi.createAuthorizeURL(scopes, 'state');
}; 