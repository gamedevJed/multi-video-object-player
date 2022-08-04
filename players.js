/*
This creates multiple play/pause buttons for video objects.
Could be expanded in many differnt ways for various applications.
Accessible to a degree.
*/
let testimonialVideos = document.getElementsByClassName('video-testimonial');
let playButtons = document.getElementsByClassName('play-testimonial');
let pauseButtons = document.getElementsByClassName('pause-testimonial');

for (let i = 0; i < 3; i++) {
    testimonialVideos[i].addEventListener( 'mouseover', function(e) {
        testimonialVideos[i].play()
    });

    testimonialVideos[i].addEventListener( 'mouseout', function(e) {
        testimonialVideos[i].pause()
    });

    playButtons[i].addEventListener( 'click', function(e) {
        testimonialVideos[i].play()
    },true);

    pauseButtons[i].addEventListener( 'click', function(e) {
        testimonialVideos[i].pause()
    },true);
};
