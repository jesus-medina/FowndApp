function storageSetup() {
    // Create a root reference
    var storageRef = storage.ref();

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');
}