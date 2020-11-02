var firebaseConfig = {
  apiKey: "AIzaSyB9mJscZyGQlnpgbbCWbnXE5t45c2e__O0",
  authDomain: "fownd-24250.firebaseapp.com",
  databaseURL: "https://fownd-24250.firebaseio.com",
  projectId: "fownd-24250",
  storageBucket: "fownd-24250.appspot.com",
  messagingSenderId: "1057101224680",
  appId: "1:1057101224680:web:d29516159ac47fceed075d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let markdownContent = "";

const db = firebase.firestore();
const storage = firebase.storage();

function onLoad() {
  firestoreSetup();
  // storageSetup();
}

class Song {
  constructor(jsonSong) {
    this.name = jsonSong['name'];
    this.player = jsonSong['player'];
    this.name = jsonSong['name'];
    this['shown-lyrics'] = jsonSong['shown-lyrics'];
    this.musicalTone = new MusicalTone(jsonSong['musicalTone']);
  }

  tone() {
    const musicalTone = this.musicalTone;
    const type = musicalTone.type;
    const tone = musicalTone.tone.toString();
    if (type === 'M') {
      return tone;
    }
    return `${tone}${musicalTone.type}`;
  }

  label() {
    let label = '';
    // if (this.tone() !== undefined) {
    //   label += this.tone();
    // }
    if (this.name !== undefined) {
      label += `${this.name}`;
    }
    if (this.player !== undefined) {
      label += ` - ${this.player}`;
    }
    return label;
  }
}

class MusicalTone {
    constructor(jsonMusicalTone) {
      this.tone = jsonMusicalTone['tone'];
      this.type = jsonMusicalTone['type'];
    }
}
