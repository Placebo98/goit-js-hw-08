import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoCurrentTime = 'videoplayer-current-time';
const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);
const currentTime = localStorage.getItem(videoCurrentTime);

const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem(videoCurrentTime, JSON.stringify(currentTime));
  });
}, 1000);

player.on('timeupdate', saveCurrentTime);

function remuveVideo() {
  player.setCurrentTime(currentTime || 0);
}
remuveVideo();
