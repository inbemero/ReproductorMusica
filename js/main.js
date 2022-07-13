class Song {
    constructor(songName, author, link) {
        this.auhtor = author
        this.songName = songName
        this.link = link
    }
}
class MusicPlayer {
    constructor(songs = [], querySelector, songsFolder) {
        this.songs = songs
        this.querySelector = querySelector
        this.indexSong = 0
        this.playingStatus = "paused"
        this.songsFolder = songsFolder
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
    }
    updateSongText() {
        const elements = document.querySelectorAll(this.querySelector)
        elements.forEach(element => {
            element.innerHTML = this.songs[this.indexSong].songName
        })
    }
    nextSong() {
        this.indexSong = this.indexSong + 1
        if (this.indexSong >= this.songs.length) {
            this.indexSong = 0;
        }
        this.updateSongText()
        this.pause()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.play()
    }
    prevSong() {
        this.indexSong = this.indexSong - 1
        if (this.indexSong < 0) {
            this.indexSong = this.songs.length - 1;
        }
        this.updateSongText()
        this.pause()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.play()
    }
    pause() {
        this.audioPlayer.pause()
    }
    play() {
        this.audioPlayer.play()
    }
}

const mySongs = [
    new Song(
        'Madrugada',
        'Enjambre',
        'Enjambre - Madrugada.mp3',
    ),
    new Song(
        'Nada Personal',
        'Soda Stereo',
        'Soda Stereo - Nada Personal.mp3',
    ),
    new Song(
        'What Would I Want Sky',
        'Animal Collective',
        'Animal Collective - What Would I Want Sky.mp3',
    ),
    new Song(
        'Enculado',
        'Dildo',
        'Dildo - Enculado.mp3',
    )
]
const myMusicPlayer = new MusicPlayer(mySongs, '.texto-cancion', './assets/music/')