let songList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"];
let artistList = ["NSYNC", "Eminem", "Taio Cruz", "Aloe Blacc", "OneRepublic"];
let lengthList = ["3:20", "5:20", "3:05", "4:16", "3:44"];
let imageList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"];
let linkList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"];



$('.addButton').click(function() {
    let aSong = $(".song").val();
    let aArtist = $(".artist").val();
    let aLength = $(".length").val();
    let aImage = $(".image").val();
    let aLink = $(".link").val();
    console.log(aSong, aArtist, aLength, aImage, aLink);

    songList.push(aSong);
    artistList.push(aArtist);
    lengthList.push(aLength);
    imageList.push(aImage);
    linkList.push(aLink);


        $(".songList").clear();

    songList.forEach(function(song) {
    $('.songList').append("<h4>" + song + "</h4>")
});
        $(".artistList").clear();

artistList.forEach(function(artist) {
    $('.artistList').append("<h4>" + artist + "</h4>")
});

        $(".artistList").clear();

lengthList.forEach(function(length) {
    $('.lengthList').append("<h4>" + length + "</h4>")
});

        $(".artistList").clear();

imageList.forEach(function(image) {
    $('.imageList').append("<h4>" + image + "</h4>")
});

    $(".artistList").clear();

linkList.forEach(function(link) {
    $('.linkList').append("<h4>" + link + "</h4>")
});


});

