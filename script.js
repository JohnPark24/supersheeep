const video = document.getElementById('video-background');
video.play()


// function https://www.youtube.com/channel/UCQKdI9HH_E6zpvtFCmL-dxQ?sub_confirmation=1

const button = document.getElementById('sub-button');

button.addEventListener('click', function(){
    window.open('https://www.youtube.com/channel/UCQKdI9HH_E6zpvtFCmL-dxQ?sub_confirmation=1', '_blank')
});