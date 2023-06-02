function solve(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songsCount = Number(arr.shift());
  let songs = [];

  for (let i = 1; i <= songsCount; i++) {
    [songTypeList, songName, songTime] = arr.shift().split("_");
    let song = new Song(songTypeList, songName, songTime);
    songs.push(song);
  }

  let typeToPrint = arr.shift();

  if (typeToPrint == "all") {
    for (let song of songs) {
      console.log(song.name);
    }
  } else {
    for (let song of songs) {
      if (song.typeList == typeToPrint) {
        console.log(song.name);
      }
    }
  }
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
