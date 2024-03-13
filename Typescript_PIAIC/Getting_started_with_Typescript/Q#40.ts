// Object Album
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

// Function
function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

// Function call
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3", 5));
