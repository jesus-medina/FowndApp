function firestoreSetup() {
    db.collection("musical-groups")
        .doc("ABCDEF")
        .onSnapshot(function (doc) {
            doc.get('actual-song').onSnapshot({
            next(documentSnapshot) {
                const actualSong = new Song(documentSnapshot.data());
                markdownContent = actualSong['shown-lyrics'];
                updateMarkdown(markdownContent);
                // updateLabel(actualSong.label());
            }
            })
        });
}