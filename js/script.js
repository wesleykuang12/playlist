let songList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"]
let artistList = ["NSYNC", "Eminem", "Taio Cruz", "Aloe Blacc", "OneRepublic"]
let lengthList = ["f", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"]
let imageList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"]
let linkList = ["Bye Bye Bye", "Lose Yourself", "Break Your Heart", "The Man", "Secrets"]


$('.addButton').click(function() {
    let aSong = $(".songList").val();
    let aArtist = $(".artistList").val();
    let aLength = $(".lengthList").val();
    let aImage = $(".imageList").val();
    let aLink = $(".linkList").val();
}



songList.forEach(function(song) {
    $('.songList').append("<h4>" + song + "</h4>")
    
});



artistList.forEach(function(artist) {
    $('.artistList').append("<h4>" + artist + "</h4>")
});



lengthList.forEach(function(length) {
    $('.lengthList').append("<h4>" + length + "</h4>")
});



imageList.forEach(function(image) {
    $('.imageList').append("<h4>" + image + "</h4>")
});



linkList.forEach(function(link) {
    $('.linkList').append("<h4>" + link + "</h4>")
});