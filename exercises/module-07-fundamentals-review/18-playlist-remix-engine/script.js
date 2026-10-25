function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];
  const flat = [];
  for (let pIdx = 0; pIdx < playlists.length; pIdx++) {
    const playlist = playlists[pIdx];
    if (Array.isArray(playlist)) {
      for (let tIdx = 0; tIdx < playlist.length; tIdx++) {
        flat.push({
          ...playlist[tIdx],
          source: [pIdx, tIdx]
        });
      }
    }
  }
  return flat;
}

function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(tracks) {
  const seen = new Set();
  const result = [];
  for (const track of tracks) {
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      result.push({ ...track });
    }
  }
  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};
  const result = [];
  for (const track of tracks) {
    const count = artistCounts[track.artist] || 0;
    if (count < maxPerArtist) {
      artistCounts[track.artist] = count + 1;
      result.push({ ...track });
    }
  }
  return result;
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(quotaEnforced);
}
